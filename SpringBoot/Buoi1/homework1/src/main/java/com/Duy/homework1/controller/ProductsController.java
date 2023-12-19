package com.Duy.homework1.controller;

import com.Duy.homework1.model.Products;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;
@RestController
public class ProductsController {
    private final List<Products> listProducts = new ArrayList<>();
    public ProductsController() {
        listProducts.add(new Products("1","Xiaomi MI 6","Like New",2000,"Xiaomi"));
        listProducts.add(new Products("2","Xiaomi MI 7","Like New",2100,"Xiaomi"));
        listProducts.add(new Products("3","Xiaomi MI 8","Like New",2200,"Xiaomi"));
        listProducts.add(new Products("4","Xiaomi MI 9","Like New",2300,"Xiaomi"));
        listProducts.add(new Products("5","Xiaomi MI 10","Like New",2400,"Xiaomi"));
        listProducts.add(new Products("6","Xiaomi MI 11","Like New",2500,"Xiaomi"));
    }
    @GetMapping("/Products")
    public List<Products> getAllProducts(){
        return listProducts;
    }
}
