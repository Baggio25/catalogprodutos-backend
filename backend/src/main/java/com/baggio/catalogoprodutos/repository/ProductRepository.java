package com.baggio.catalogoprodutos.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.baggio.catalogoprodutos.entity.Category;
import com.baggio.catalogoprodutos.entity.Product;

public interface ProductRepository extends JpaRepository<Product, Long>{

	@Query("""
			SELECT p FROM Product p
			INNER JOIN p.categories cats
			WHERE
				:category IN cats						
			""")
	Page<Product> findAllByProductAndCategory(Category category, Pageable pageable);

}
