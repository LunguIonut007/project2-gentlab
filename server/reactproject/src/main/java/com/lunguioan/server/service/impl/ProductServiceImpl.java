package com.lunguioan.server.service.impl;

import com.lunguioan.server.dto.ProductDto;
import com.lunguioan.server.model.Product;
import com.lunguioan.server.model.Supplier;
import com.lunguioan.server.repository.ProductRepository;
import com.lunguioan.server.repository.SupplierRepository;
import com.lunguioan.server.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

/**
 * Created by Ionut on 2/14/17.
 * the service uses Java 8 stream to rapidly convert from objects to dtoObjects
 * example:
 * the products.stream().map(ProductDto::new).collect(Collectors.toList()); is equal to
 *
 * List<ProductDto> productDtoList = new ArrayList<>();
 * for for(Product product : products) {
 *     productDtoList.add(new ProductDtoList(product));
 * }
 *
 * for more information search Java 8 streams and method reference
 */
@Service
public class ProductServiceImpl implements ProductService {

    @Autowired
    private ProductRepository productRepository;

    @Autowired
    private SupplierRepository supplierRepository;

    @Override
    public ProductDto getProduct(int productId) {
        return new ProductDto(productRepository.findOne(productId));
    }

    @Override
    public List<ProductDto> getAllProducts() {
       List<Product> products = productRepository.findAllProducts();

       return  products.stream().map(ProductDto::new).collect(Collectors.toList());
    }

    @Override
    public ProductDto saveProduct(ProductDto productDto) {
        Supplier supplier = supplierRepository.findOne(productDto.getSupplierLightDto().getId());
        return new ProductDto(productRepository.save(productDto.resolve(new Product(),supplier)));
    }

    @Override
    public List<ProductDto> getLastNProducts(int numberOfProducts) {
        List<Product> products = productRepository.getLastNProducts(new PageRequest(0, numberOfProducts));

        return products.stream().map(ProductDto::new).collect(Collectors.toList());
    }


    @Override
    public ProductDto editProduct(int productId, ProductDto productDto) {
         Product product = productRepository.findOne(productId);
         Supplier supplier = supplierRepository.findOne(productDto.getSupplierLightDto().getId());

         productRepository.save(productDto.resolve(product,supplier));
         return new ProductDto(product);
    }

    @Override
    public void deleteProduct(int productId) {
         productRepository.delete(productId);
    }
}
