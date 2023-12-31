package com.example.minitest.dao;

import com.example.minitest.database.ProductDB;
import com.example.minitest.model.Product;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Repository;

import java.awt.print.Pageable;
import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;
@Repository
public class ProductDAOImpl implements ProductDAO {
    @Override
    public List<Product> getAllProducts() {
        return ProductDB.products;
    }

    @Override
    public Product getProductById(int id) {
        return ProductDB.products.get(id);
    }

    @Override
    public List<Product> searchProducts(String keyword) {
        String lowerCaseKeyword = keyword.toLowerCase();

        return getAllProducts().stream()
                .filter(product ->
                        product.getName().toLowerCase().contains(lowerCaseKeyword) ||
                                product.getDescription().toLowerCase().contains(lowerCaseKeyword)
                )
                .collect(Collectors.toList());
    }
    }


//    @Override
//    public Page<Product> findAll(Pageable pageable) {
//
//        return this.findAll(pageable);
//    }

//    @Override
//    public Page<Product> searchProducts(String searchTerm, Pageable pageable) {
//
//    }


