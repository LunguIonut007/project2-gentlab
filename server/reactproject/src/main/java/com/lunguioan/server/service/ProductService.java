package com.lunguioan.server.service;

import com.lunguioan.server.dto.ProductDto;

import java.util.List;

/**
 * Created by Ionut on 3/3/17.
 */
public interface ProductService {
    ProductDto getProduct(int productId);

    List<ProductDto> getAllProducts();

    ProductDto saveProduct(ProductDto productDto);

    List<ProductDto> getLastNProducts(int numberOfProducts);

    ProductDto editProduct(int productId, ProductDto productDto);

    void deleteProduct(int productId);
}
