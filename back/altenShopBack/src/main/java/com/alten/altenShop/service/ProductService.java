package com.alten.altenShop.service;

import com.alten.altenShop.model.Product;
import com.alten.altenShop.utils.JsonFileHandler;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;

@Service
public class ProductService {

    public List<Product> getAllProducts() {
        return JsonFileHandler.readProducts();
    }

    public Product getProductById(Long id) {
        return JsonFileHandler.readProducts().stream()
                .filter(product -> Objects.equals(product.getId(), id))
                .findFirst()
                .orElseThrow(() -> new RuntimeException("Produit non trouvé"));
    }

    public void addProduct(Product product) {
        List<Product> products = JsonFileHandler.readProducts();
        product.setId(generateId(products));
        products.add(product);
        JsonFileHandler.writeProducts(products);
    }

    public void updateProduct(Product product) {
        JsonFileHandler.updateProduct(product);
    }

    public void deleteProduct(Long id) {
        List<Product> products = JsonFileHandler.readProducts();
        products.removeIf(product -> Objects.equals(product.getId(), id));
        JsonFileHandler.writeProducts(products);
    }

    private Long generateId(List<Product> products) {
        Long maxId = 0L;
        for (Product product : products) {
            if (product.getId() > maxId) {
                maxId = product.getId();
            }
        }
        return maxId + 1;
    }
}
