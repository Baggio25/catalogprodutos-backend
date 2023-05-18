package com.baggio.catalogoprodutos.repository;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.baggio.catalogoprodutos.entity.Category;
import com.baggio.catalogoprodutos.entity.Product;

public interface ProductRepository extends JpaRepository<Product, Long>{

	@Query("""
			SELECT DISTINCT p FROM Product p 
			INNER JOIN 
				p.categories cats 
			WHERE 
			 	(COALESCE(:categories) IS NULL OR cats IN :categories) AND
				(:name = '' OR LOWER(p.name) LIKE LOWER(CONCAT('%', :name, '%')))
			""")
	Page<Product> findAllPaged(List<Category> categories, String name, Pageable pageable);

}
