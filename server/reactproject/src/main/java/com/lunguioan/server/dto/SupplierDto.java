package com.lunguioan.server.dto;

import com.lunguioan.server.model.Supplier;
import org.hibernate.validator.constraints.NotEmpty;

import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;

/**
 * Created by Ionut on 2/21/17.
 * Data transfer object for supplier, it contains all the information from the supplier object
 */
public class SupplierDto {

    @NotNull
    @Min(0)
    private int id;

    @NotEmpty
    private String name;
    @NotEmpty
    private String address;

    public SupplierDto(Supplier supplier) {
        id = supplier.getId();
        name = supplier.getName();
        address = supplier.getAddress();
    }

    public SupplierDto() {
        /* left blank because spring needs a default constructor to use reflection */
    }

    //it puts the supplierDto field values in the supplier object;
    public Supplier resolve(Supplier supplier) {
        supplier.setName(this.name);
        supplier.setAddress(this.address);

        return  supplier;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }
}
