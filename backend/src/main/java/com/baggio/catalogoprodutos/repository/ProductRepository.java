package com.baggio.catalogoprodutos.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.baggio.catalogoprodutos.entity.Product;

public interface ProductRepository extends JpaRepository<Product, Long>{

}
