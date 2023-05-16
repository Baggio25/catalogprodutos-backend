package com.baggio.catalogoprodutos.dto;

import javax.validation.constraints.NotBlank;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UserInsertDTO extends UserDTO{

	@NotBlank
	private String password;

	public UserInsertDTO() {
		super();
	}
	
}
