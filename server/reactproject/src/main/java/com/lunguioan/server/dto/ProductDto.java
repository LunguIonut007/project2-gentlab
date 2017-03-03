package com.lunguioan.server.dto;

import com.lunguioan.server.model.Product;
import com.lunguioan.server.model.Supplier;

/**
 * Created by Ionut on 2/21/17.
 */
public class ProductDto {

    private int id;
    private String name;
    private String description;
    private int quantity;
    private SupplierLightDto supplierLightDto;

    public ProductDto(Product product) {
        id = product.getId();
        name = product.getName();
        description = product.getDescription();
        quantity = product.getQuantity();
        supplierLightDto = new SupplierLightDto(product.getSupplier());
    }

    public ProductDto() {
    }

    public Product resolve(Product product, Supplier supplier){
        product.setName(this.name);
        product.setQuantity(this.quantity);
        product.setDescription(this.description);
        product.setSupplier(supplier);

        return product;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public SupplierLightDto getSupplierLightDto() {
        return supplierLightDto;
    }

    public void setSupplierLightDto(SupplierLightDto supplierLightDto) {
        this.supplierLightDto = supplierLightDto;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    @Override
    public String toString() {
        return "ProductDto{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", description='" + description + '\'' +
                ", quantity=" + quantity +
                ", supplierLightDto=" + supplierLightDto +
                '}';
    }
}
