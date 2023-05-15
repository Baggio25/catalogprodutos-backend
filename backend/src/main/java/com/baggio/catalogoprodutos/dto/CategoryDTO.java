package com.baggio.catalogoprodutos.dto;

import javax.validation.constraints.NotBlank;

import com.baggio.catalogoprodutos.entity.Category;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class CategoryDTO {

	private Long id;
	
	@NotBlank
	private String name;

	public CategoryDTO(Category category) {
		id = category.getId();
		name = category.getName();
	}
	
}
