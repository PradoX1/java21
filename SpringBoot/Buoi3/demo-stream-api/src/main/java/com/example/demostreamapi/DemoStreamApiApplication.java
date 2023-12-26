package com.example.demostreamapi;

import com.example.demostreamapi.dao.PersonDAO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class DemoStreamApiApplication implements CommandLineRunner {
    @Autowired
    private PersonDAO personDAO;

    public static void main(String[] args) {
        SpringApplication.run(DemoStreamApiApplication.class, args);
    }

    @Override
    public void run(String... args) throws Exception {
        personDAO.printListPeople(personDAO.getAll());
    }
}

