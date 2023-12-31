package com.example.minitest.database;


import com.example.minitest.utils.IFileReader;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Configuration;

import java.net.URL;

@Configuration
public class InitDB implements CommandLineRunner {
    @Autowired
    private IFileReader fileReader;


    @Override
    public void run(String... args) throws Exception {
        ProductDB.products = fileReader.readFile("Products.csv");
        System.out.println("product size : " + ProductDB.products.size());

        ProductDB.products.forEach(System.out::println);
    }
}
