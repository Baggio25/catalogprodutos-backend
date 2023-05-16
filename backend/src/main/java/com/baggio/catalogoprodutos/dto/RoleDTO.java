package com.baggio.catalogoprodutos.dto;

import com.baggio.catalogoprodutos.entity.Role;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class RoleDTO {

	private Long id;
	private String authority;

	public RoleDTO(Role role) {
		id = role.getId();
		authority = role.getAuthority();
	}
	
}
