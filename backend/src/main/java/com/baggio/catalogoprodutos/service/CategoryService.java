package com.baggio.catalogoprodutos.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.baggio.catalogoprodutos.dto.CategoryDTO;
import com.baggio.catalogoprodutos.entity.Category;
import com.baggio.catalogoprodutos.repository.CategoryRepository;
import com.baggio.catalogoprodutos.service.exceptions.EntityNotFoundException;

@Service
public class CategoryService {

	@Autowired
	private CategoryRepository categoryRepository;
	
	@Transactional(readOnly = true)
	public Page<CategoryDTO> findAll(Pageable pageable) {
		Page<Category> pageDTO = categoryRepository.findAll(pageable); 
		return pageDTO.map(category -> new CategoryDTO(category));		
	}
	
	@Transactional(readOnly = true)
	public CategoryDTO findById(Long id) {
		Optional<Category> categoryOptional = categoryRepository.findById(id);
		Category category = categoryOptional.orElseThrow(
				() -> new EntityNotFoundException("Entidade não encontrada com o id: "+ id));

		return new CategoryDTO(category);
	}
}
