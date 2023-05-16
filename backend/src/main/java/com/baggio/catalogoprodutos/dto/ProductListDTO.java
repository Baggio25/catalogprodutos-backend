package com.baggio.catalogoprodutos.dto;

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
	
	public ProductListDTO(Product product) {
		id = product.getId();
		name = product.getName();
		description = product.getDescription();
		price = product.getPrice();
		imgUrl = product.getDescription();
		
	}	
	
}
