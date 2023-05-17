package com.baggio.catalogoprodutos.dto;

import javax.validation.constraints.NotBlank;

import com.baggio.catalogoprodutos.service.validation.UserInsertValid;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@UserInsertValid
public class UserInsertDTO extends UserDTO{

	@NotBlank
	private String password;

	public UserInsertDTO() {
		super();
	}
	
}
