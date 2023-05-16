package com.baggio.catalogoprodutos.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.baggio.catalogoprodutos.entity.User;

public interface UserRepository extends JpaRepository<User, Long>{

}
