package com.lunguioan.server.controller;

import com.lunguioan.server.dto.ProductDto;
import com.lunguioan.server.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

/**
 * Created by Ionut on 2/14/17.
 * Spring controller for handling CRUD mapping for Product object
 */

@RestController
@RequestMapping("/api/products")
public class ProductController {

    @Autowired
    private ProductService productService;

    @GetMapping("")
    public List<ProductDto> getAllProducts()  {
        return productService.getAllProducts();
    }

    @GetMapping("/{productId}")
    public ProductDto getProductById(@PathVariable("productId") int productId) {

        return productService.getProduct(productId);
    }

    @PostMapping("/add")
    public ProductDto createProductForSupplier(@RequestBody @Valid ProductDto productDto) {
        return productService.saveProduct(productDto);
    }

    @PutMapping("/{productId}")
    public ProductDto editProduct(@PathVariable("productId") int productId, @RequestBody @Valid ProductDto productDto) {
       return productService.editProduct(productId,productDto);
    }

    @DeleteMapping("/delete/{productId}")
    public void deleteProduct(@PathVariable("productId") int productId) {
        productService.deleteProduct(productId);
    }

    //gets last n products; if the number is not specified in query, default to 5
    //example: /getLastProducts?number=10 brings back the last 10 elements
    @GetMapping("/getLastProducts")
    public List<ProductDto> getLastProducts(@RequestParam(value = "number",defaultValue = "5")int numberOfProducts) {
        return productService.getLastNProducts(numberOfProducts);
    }


}
