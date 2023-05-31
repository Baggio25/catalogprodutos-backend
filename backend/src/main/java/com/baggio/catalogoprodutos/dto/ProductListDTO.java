package com.baggio.catalogoprodutos.dto;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;

import com.baggio.catalogoprodutos.entity.Category;
import com.baggio.catalogoprodutos.entity.Product;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class ProductListDTO {

	private Long id;

	private String name;

	private String description;

	private Double price;

	private String imgUrl;

	private List<CategoryDTO> categories = new ArrayList<CategoryDTO>();

	public ProductListDTO(Product product) {
		id = product.getId();
		name = product.getName();
		description = product.getDescription();
		price = product.getPrice();
		imgUrl = product.getImgUrl();

	}

	public ProductListDTO(Product product, Set<Category> categories) {
		this(product);
		categories.forEach((category) -> this.categories.add(new CategoryDTO(category)));
	}

}
