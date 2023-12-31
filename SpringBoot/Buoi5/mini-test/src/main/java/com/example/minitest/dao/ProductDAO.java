package com.example.minitest.dao;

import com.example.minitest.model.Product;
import org.springframework.boot.autoconfigure.data.jpa.JpaRepositoriesAutoConfiguration;
import org.springframework.data.domain.Page;

import java.awt.print.Pageable;
import java.util.List;

public interface ProductDAO  {
    List<Product> getAllProducts();
    Product getProductById (int id);
    List<Product> searchProducts(String keyword);

}
