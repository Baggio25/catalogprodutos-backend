package com.baggio.catalogoprodutos.resource;

import java.net.URI;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.baggio.catalogoprodutos.dto.UserDTO;
import com.baggio.catalogoprodutos.dto.UserInsertDTO;
import com.baggio.catalogoprodutos.dto.UserListDTO;
import com.baggio.catalogoprodutos.dto.UserUpdateDTO;
import com.baggio.catalogoprodutos.service.UserService;

@RestController
@RequestMapping(value = "/users")
public class UserResources {

	@Autowired
	private UserService userService;
	
	@GetMapping
	public ResponseEntity<Page<UserListDTO>> findAllUsers(Pageable pageable) {
		Page<UserListDTO> pageDTO = userService.findAll(pageable);		
		return ResponseEntity.ok(pageDTO);
	}

	@GetMapping("/{id}")
	public ResponseEntity<UserDTO> findById(@PathVariable Long id) {
		UserDTO userDTO = userService.findById(id);		
		return ResponseEntity.ok(userDTO);
	}
	
	@PostMapping
	public ResponseEntity<UserDTO> insert(@Valid @RequestBody UserInsertDTO userInsertDTO) {
		UserDTO newUserDTO = userService.insert(userInsertDTO);
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}")
				.buildAndExpand(newUserDTO.getId()).toUri();
		
		return ResponseEntity.created(uri).body(newUserDTO);
	}
	
	@PutMapping(value = "/{id}")
	public ResponseEntity<UserDTO> update(@Valid @RequestBody UserUpdateDTO userUpdateDTO,
			@PathVariable Long id) {
		UserDTO newUserDTO = userService.update(userUpdateDTO, id);		
		return ResponseEntity.ok(newUserDTO);
	}

	@DeleteMapping(value = "/{id}")
	public ResponseEntity<Void> delete(@PathVariable Long id) {
		userService.update(id);		
		return ResponseEntity.noContent().build();
	}
	
	
}
