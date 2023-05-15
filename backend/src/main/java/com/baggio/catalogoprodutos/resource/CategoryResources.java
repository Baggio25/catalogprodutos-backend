package com.baggio.catalogoprodutos.resource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.baggio.catalogoprodutos.dto.CategoryDTO;
import com.baggio.catalogoprodutos.service.CategoryService;

@RestController
@RequestMapping(value = "/categories")
public class CategoryResources {

	@Autowired
	private CategoryService categoryService;
	
	@GetMapping
	public ResponseEntity<Page<CategoryDTO>> findAllCategories(Pageable pageable) {
		Page<CategoryDTO> pageDTO = categoryService.findAll(pageable);		
		return ResponseEntity.ok(pageDTO);
	}

	@GetMapping("/{id}")
	public ResponseEntity<CategoryDTO> findById(@PathVariable Long id) {
		CategoryDTO categoryDTO = categoryService.findById(id);		
		return ResponseEntity.ok(categoryDTO);
	}
	
}
