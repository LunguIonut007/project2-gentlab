package com.lunguioan.server.dto;

import com.lunguioan.server.model.Supplier;
import org.hibernate.validator.constraints.NotEmpty;

import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;

/**
 * Created by Ionut on 2/21/17.
 * Data transfer object for supplier, it contains some information about the supplier (at the moment of the writing the
 * use case was the supplier name column from some tables)
 */
public class SupplierLightDto {

    @NotNull
    @Min(0)
    private int id;

    @NotEmpty
    private String name;

    public SupplierLightDto() {
        /* left blank because spring needs a default constructor to use reflection */
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
