package com.alten.altenShop.controller;

import com.alten.altenShop.model.Utilisator;
import com.alten.altenShop.service.UtilisatorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api_utilisators")
public class UtilisatorController {

    @Autowired
    UtilisatorService utilisatorService;

    @GetMapping("/{name}")
    public Utilisator getUtilisatorByName(@PathVariable String name){
        return utilisatorService.getUtilisatorByName(name.trim());
    }
}
