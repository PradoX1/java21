package com.example.demostreamapi.controller;


import com.example.demostreamapi.dao.PersonDAO;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;


import java.util.List;
import java.util.Map;
@Controller
public class PSController {
    private PersonDAO personDAO;
    @GetMapping("/")
    public String getHome() {
        return "index";
    }

    @GetMapping("/groupPeopleByCity")
    public String groupPeopleByCity(Model model) {
        model.addAttribute("cities", personDAO.groupPeopleByCity());
        return "groupPeopleByCity";
    }

    @GetMapping("/groupJobByCount")
    public String groupJobByCount(Model model) {
        model.addAttribute("jobs", personDAO.groupJobByCount());
        return "groupJobByCount";
    }

    @GetMapping("/aboveAverageSalary")
    public String aboveAverageSalary(Model model) {
        model.addAttribute("peoples", personDAO.aboveAverageSalary());
        return "aboveAverageSalary";
    }

    @GetMapping("/longestName")
    public String longestName(Model model) {
        model.addAttribute("people", personDAO.longestName());
        return "longestName";
    }
}
