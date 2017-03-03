package com.lunguioan.server.dto;

import com.lunguioan.server.model.Supplier;

/**
 * Created by Ionut on 2/21/17.
 */
public class SupplierLightDto {

    private int id;
    private String name;

    public SupplierLightDto() {
    }

    public SupplierLightDto(Supplier supplier) {
        id = supplier.getId();
        name = supplier.getName();
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
}
