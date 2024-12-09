package com.alten.altenShop.service;

import com.alten.altenShop.model.Utilisator;
import com.alten.altenShop.utils.JsonFileHandler;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UtilisatorService {

    public Utilisator getUtilisatorByName(String name) {
        return JsonFileHandler.readUtilisators().stream()
                .filter(utilisator -> utilisator.getName().equals(name))
                .findFirst()
                .orElse(new Utilisator());
    }
}
