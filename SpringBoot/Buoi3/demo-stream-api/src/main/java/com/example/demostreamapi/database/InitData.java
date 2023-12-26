package com.example.demostreamapi.database;

import com.example.demostreamapi.DemoStreamApiApplication;
import com.example.demostreamapi.utils.CSVFileReader;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Configuration;

import java.net.URL;


@Configuration
public class InitData implements CommandLineRunner {
    @Autowired
    private CSVFileReader csvFileReader;

    @Override
    public void run(String... args) throws Exception {
        URL resourceUrl = DemoStreamApiApplication.class.getClassLoader().getResource("Person.csv");
        PersonDB.personList = csvFileReader.readFile(resourceUrl.getPath());
        System.out.println(PersonDB.personList.size());
        PersonDB.personList.forEach(System.out::println);
    }
}