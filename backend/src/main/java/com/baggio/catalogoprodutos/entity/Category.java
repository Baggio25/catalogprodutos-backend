package com.baggio.catalogoprodutos.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "tb_category")
@Getter
@Setter
@EqualsAndHashCode
@NoArgsConstructor
public class Category {
	
	@Id
	@GeneratedValue(strategy =  GenerationType.IDENTITY)
	private Long id;
	
	private String name;
	
	public Category(Long id, String name) {
		this.id = id;
		this.name = name;
	}

}
