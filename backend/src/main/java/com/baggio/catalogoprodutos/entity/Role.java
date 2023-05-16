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
@Table(name = "tb_role")
@Getter
@Setter
@EqualsAndHashCode
@NoArgsConstructor
public class Role {
	
	@Id
	@GeneratedValue(strategy =  GenerationType.IDENTITY)
	private Long id;
	
	private String authority;
	
	public Role(Long id, String authority) {
		this.id = id;
		this.authority = authority;
	}

}
