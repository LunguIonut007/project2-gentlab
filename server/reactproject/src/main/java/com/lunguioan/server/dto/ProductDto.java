package com.lunguioan.server.dto;

import com.lunguioan.server.model.Product;
import com.lunguioan.server.model.Supplier;
import org.hibernate.validator.constraints.NotEmpty;

import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;

/**
 * Created by Ionut on 2/21/17.
 * Data transfer object for product, it contains all the information from the product object
 */
public class ProductDto {

    @NotNull
    @Min(0)
    private int id;

    @NotEmpty
    private String name;
    private String description;

    @NotNull
    @Min(0)
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
        /* left blank because spring needs a default constructor to use reflection */
    }

    //it puts the productDto field values in the product object;
    //the supplier object is passed (and calculated based by the supplierLightDto id) because we do not want the productDto
    //to be aware of the services/repositories
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
