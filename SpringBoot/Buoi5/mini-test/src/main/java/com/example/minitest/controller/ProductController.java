package com.example.minitest.controller;

import com.example.minitest.dao.ProductDAOImpl;
import com.example.minitest.model.Product;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;

@Controller
public class ProductController {

    @GetMapping("/")
    public String getAllProduct(Model model, ProductDAOImpl productDAO){
        model.addAttribute("products", productDAO.getAllProducts());
        return "index";
    }
    @GetMapping("/product/{id}")
    public String getDetailProduct(Model model, @PathVariable int id, ProductDAOImpl productDAO){
        model.addAttribute("product", productDAO.getProductById(id));
        return "detailProduct";
    }
@GetMapping("/searchProducts")
    public String searchProducts(Model model, @RequestParam String keyword,ProductDAOImpl productDAO){
    model.addAttribute("products",productDAO.searchProducts(keyword) );
    return "searchProduct";

}
}
