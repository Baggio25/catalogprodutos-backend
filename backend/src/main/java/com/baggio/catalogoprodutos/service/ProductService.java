package com.baggio.catalogoprodutos.service;

import java.util.Optional;

import javax.persistence.EntityNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.baggio.catalogoprodutos.dto.CategoryDTO;
import com.baggio.catalogoprodutos.dto.ProductDTO;
import com.baggio.catalogoprodutos.dto.ProductListDTO;
import com.baggio.catalogoprodutos.entity.Category;
import com.baggio.catalogoprodutos.entity.Product;
import com.baggio.catalogoprodutos.repository.CategoryRepository;
import com.baggio.catalogoprodutos.repository.ProductRepository;
import com.baggio.catalogoprodutos.service.exceptions.DatabaseException;
import com.baggio.catalogoprodutos.service.exceptions.ResourceNotFoundException;


@Service
public class ProductService {

	@Autowired
	private ProductRepository productRepository;
	
	@Autowired
	private CategoryRepository categoryRepository;
	
	@Transactional(readOnly = true)
	public Page<ProductListDTO> findAll(Pageable pageable) {
		Page<Product> pageDTO = productRepository.findAll(pageable); 
		return pageDTO.map(product -> new ProductListDTO(product));		
	}
	
	@Transactional(readOnly = true)
	public ProductDTO findById(Long id) {
		Optional<Product> productOptional = productRepository.findById(id);
		Product product = productOptional.orElseThrow(
				() -> new ResourceNotFoundException("Entidade não encontrada com o id: "+ id));

		return new ProductDTO(product, product.getCategories());
	}

	@Transactional
	public ProductDTO insert(ProductDTO productDTO) {
		Product product = new Product();
		copyDtoToEntity(productDTO, product);
		product = productRepository.save(product);
		
		return new ProductDTO(product, product.getCategories());
	}

	@Transactional
	public ProductDTO update(ProductDTO productDTO, Long id) {
		try {
			Product product = productRepository.getReferenceById(id);
			copyDtoToEntity(productDTO, product);	
			product = productRepository.save(product);
			
			return new ProductDTO(product, product.getCategories());
		}catch (EntityNotFoundException e) {
			throw new ResourceNotFoundException("Entidade não encontrada com o id: "+ id);
		}
	}

	public void update(Long id) {
		try {
			productRepository.deleteById(id);
		} catch (EmptyResultDataAccessException e) {
			throw new ResourceNotFoundException("Entidade não encontrada com o id: "+ id);
		} catch (DataIntegrityViolationException e) {
			throw new DatabaseException("Violação de integridade, já existe uma entidade "
					+ "utilizando esse registro");
		}
		
	}

	private void copyDtoToEntity(ProductDTO productDTO, Product product) {
		product.setName(productDTO.getName());
		product.setDescription(productDTO.getDescription());
		product.setPrice(productDTO.getPrice());
		product.setDate(productDTO.getDate());
		product.setImgUrl(productDTO.getImgUrl());
		
		product.getCategories().clear();
		for(CategoryDTO categoryDTO : productDTO.getCategories()) {
			Category category = categoryRepository.getReferenceById(categoryDTO.getId());
			product.getCategories().add(category);
		}
	}
	
}
