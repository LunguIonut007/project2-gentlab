package com.lunguioan.server.dto;

import com.lunguioan.server.model.Supplier;

/**
 * Created by Ionut on 2/21/17.
 */
public class SupplierDto {
    private int id;
    private String name;
    private String address;

    public SupplierDto(Supplier supplier) {
        id = supplier.getId();
        name = supplier.getName();
        address = supplier.getAddress();
    }

    public SupplierDto() {
    }

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
