package com.alten.altenShop.utils;

import com.alten.altenShop.model.Product;
import com.alten.altenShop.model.Utilisator;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;

import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

public class JsonFileHandler {

    private static final File PRODUCTS_FILE = new File("src/main/java/com/alten/altenShop/utils/products.json");
    private static final File UTILISATORS_FILE = new File("src/main/java/com/alten/altenShop/utils/utilisators.json");
    private static final ObjectMapper MAPPER = new ObjectMapper();

    public static List<Product> readProducts() {
        try {
            if (!PRODUCTS_FILE.exists()) {
                return new ArrayList<>();
            }
            return MAPPER.readValue(PRODUCTS_FILE, new TypeReference<List<Product>>() {});
        } catch (IOException e) {
            throw new RuntimeException("Erreur lors de la lecture du fichier JSON", e);
        }
    }

    public static void writeProducts(List<Product> products) {
        try {
            MAPPER.writeValue(PRODUCTS_FILE, products);
        } catch (IOException e) {
            throw new RuntimeException("Erreur lors de l'écriture dans le fichier PRODUCTS.JSON", e);
        }
    }

    public static void updateProduct(Product updatedProduct) {
        List<Product> products = readProducts();
        boolean found = false;

        for (int i = 0; i < products.size(); i++) {
            if (Objects.equals(products.get(i).getId(), updatedProduct.getId())) {
                products.set(i, updatedProduct);
                found = true;
                break;
            }
        }
        if (!found) {
            throw new RuntimeException("Produit avec l'ID " + updatedProduct.getId() + " non trouvé.");
        }
        writeProducts(products);
    }

    public static List<Utilisator> readUtilisators() {
        try {
            if (!UTILISATORS_FILE.exists()) {
                return new ArrayList<>();
            }
            return MAPPER.readValue(UTILISATORS_FILE, new TypeReference<List<Utilisator>>() {});
        } catch (IOException e) {
            throw new RuntimeException("Erreur lors de la lecture du fichier UTILISATORS.JSON", e);
        }
    }

}
