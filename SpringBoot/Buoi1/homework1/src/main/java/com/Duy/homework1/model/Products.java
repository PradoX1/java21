package com.Duy.homework1.model;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Products {
    private String id;
    private String name;
    private String description;
    private int price;
    private String brand;
}


