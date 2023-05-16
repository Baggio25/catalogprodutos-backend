package com.baggio.catalogoprodutos.dto;

import com.baggio.catalogoprodutos.entity.User;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class UserListDTO {

	private Long id;
	private String firstName;
	private String lastName;
	private String email;
	
	public UserListDTO(User user) {
		id = user.getId();
		firstName = user.getFirstName();
		lastName = user.getLastName();
		email = user.getEmail();
	}

	
	
}
