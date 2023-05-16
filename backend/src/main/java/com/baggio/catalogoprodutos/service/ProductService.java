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

import com.baggio.catalogoprodutos.dto.ProductDTO;
import com.baggio.catalogoprodutos.dto.ProductListDTO;
import com.baggio.catalogoprodutos.entity.Product;
import com.baggio.catalogoprodutos.repository.ProductRepository;
import com.baggio.catalogoprodutos.service.exceptions.DatabaseException;
import com.baggio.catalogoprodutos.service.exceptions.ResourceNotFoundException;


@Service
public class ProductService {

	@Autowired
	private ProductRepository productRepository;
	
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
		product = productRepository.save(product);
		
		return new ProductDTO(product);
	}

	@Transactional
	public ProductDTO update(ProductDTO productDTO, Long id) {
		try {
			Product product = productRepository.getReferenceById(id);
						
			product = productRepository.save(product);
			
			return new ProductDTO(product);
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
	
	
}
