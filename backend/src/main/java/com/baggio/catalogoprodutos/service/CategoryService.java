package com.baggio.catalogoprodutos.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.baggio.catalogoprodutos.dto.CategoryDTO;
import com.baggio.catalogoprodutos.entity.Category;
import com.baggio.catalogoprodutos.repository.CategoryRepository;

@Service
public class CategoryService {

	@Autowired
	private CategoryRepository categoryRepository;
	
	public Page<CategoryDTO> findAll(Pageable pageable) {
		Page<Category> pageDTO = categoryRepository.findAll(pageable); 
		return pageDTO.map(category -> new CategoryDTO(category));		
	}
	
}
