package com.baggio.catalogoprodutos.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.baggio.catalogoprodutos.entity.Category;

public interface CategoryRepository extends JpaRepository<Category, Long>{

}
