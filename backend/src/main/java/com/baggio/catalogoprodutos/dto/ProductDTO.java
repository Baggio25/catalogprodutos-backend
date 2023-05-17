package com.baggio.catalogoprodutos.dto;

import java.time.Instant;
import java.util.ArrayList;
import java.util.List;
import java.util.Set;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Positive;
import javax.validation.constraints.Size;

import com.baggio.catalogoprodutos.entity.Category;
import com.baggio.catalogoprodutos.entity.Product;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class ProductDTO {

	private Long id;
	
	@NotBlank
	@Size(min = 5, max = 100)
	private String name;
	
	@NotBlank
	private String description;
	
	@NotNull
	@Positive
	private Double price;
	
	private String imgUrl;
	
	private Instant date;
	
	private List<CategoryDTO> categories = new ArrayList<CategoryDTO>();

	public ProductDTO(Product product) {
		id = product.getId();
		name = product.getName();
		description = product.getDescription();
		price = product.getPrice();
		imgUrl = product.getDescription();
		date = product.getDate();
	}

	public ProductDTO(Product product, Set<Category> categories) {
		this(product);
		categories.forEach((category) -> this.categories.add(new CategoryDTO(category)));
	}
	
}
