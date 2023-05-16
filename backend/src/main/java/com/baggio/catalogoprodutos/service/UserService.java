package com.baggio.catalogoprodutos.service;

import java.util.Optional;

import javax.persistence.EntityNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.baggio.catalogoprodutos.dto.RoleDTO;
import com.baggio.catalogoprodutos.dto.UserDTO;
import com.baggio.catalogoprodutos.dto.UserInsertDTO;
import com.baggio.catalogoprodutos.dto.UserListDTO;
import com.baggio.catalogoprodutos.entity.Role;
import com.baggio.catalogoprodutos.entity.User;
import com.baggio.catalogoprodutos.repository.RoleRepository;
import com.baggio.catalogoprodutos.repository.UserRepository;
import com.baggio.catalogoprodutos.service.exceptions.DatabaseException;
import com.baggio.catalogoprodutos.service.exceptions.ResourceNotFoundException;


@Service
public class UserService {

	@Autowired
	private BCryptPasswordEncoder passwordEncoder;
	
	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private RoleRepository roleRepository;
	
	@Transactional(readOnly = true)
	public Page<UserListDTO> findAll(Pageable pageable) {
		Page<User> pageDTO = userRepository.findAll(pageable); 
		return pageDTO.map(user -> new UserListDTO(user));		
	}
	
	@Transactional(readOnly = true)
	public UserDTO findById(Long id) {
		Optional<User> userOptional = userRepository.findById(id);
		User user = userOptional.orElseThrow(
				() -> new ResourceNotFoundException("Entidade não encontrada com o id: "+ id));

		return new UserDTO(user);
	}

	@Transactional
	public UserDTO insert(UserInsertDTO userInsertDTO) {
		User user = new User();
		copyDtoToEntity(userInsertDTO, user);
		user.setPassword(passwordEncoder.encode(userInsertDTO.getPassword()));
		user = userRepository.save(user);
		
		return new UserDTO(user);
	}

	@Transactional
	public UserDTO update(UserDTO userDTO, Long id) {
		try {
			User user = userRepository.getReferenceById(id);
			copyDtoToEntity(userDTO, user);	
			user = userRepository.save(user);
			
			return new UserDTO(user);
		}catch (EntityNotFoundException e) {
			throw new ResourceNotFoundException("Entidade não encontrada com o id: "+ id);
		}
	}

	public void update(Long id) {
		try {
			userRepository.deleteById(id);
		} catch (EmptyResultDataAccessException e) {
			throw new ResourceNotFoundException("Entidade não encontrada com o id: "+ id);
		} catch (DataIntegrityViolationException e) {
			throw new DatabaseException("Violação de integridade, já existe uma entidade "
					+ "utilizando esse registro");
		}
		
	}

	private void copyDtoToEntity(UserDTO userDTO, User user) {
		user.setFirstName(userDTO.getFirstName());
		user.setLastName(userDTO.getLastName());
		user.setEmail(userDTO.getEmail());
		
		user.getRoles().clear();
		for(RoleDTO roleDTO: userDTO.getRoles()) {
			Role role = roleRepository.getReferenceById(roleDTO.getId());
			user.getRoles().add(role);
		}
	}
	
}
