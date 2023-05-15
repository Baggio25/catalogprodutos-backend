package com.baggio.catalogoprodutos.resource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.baggio.catalogoprodutos.entity.Category;
import com.baggio.catalogoprodutos.service.CategoryService;

@RestController
@RequestMapping(value = "/categories")
public class CategoryResources {

	@Autowired
	private CategoryService categoryService;
	
	@GetMapping
	public ResponseEntity<Page<Category>> findAllCategories(Pageable pageable) {
		Page<Category> page = categoryService.findAll(pageable);
		return ResponseEntity.ok(page);
	}
	
}
