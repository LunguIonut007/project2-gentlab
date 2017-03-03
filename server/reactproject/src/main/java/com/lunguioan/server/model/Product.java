package com.lunguioan.server.model;

import javax.persistence.*;

/**
 * Created by Ionut on 2/11/17.
 * product object that maps PRODUCT table
 */

@Entity
@Table(name="PRODUCT")
public class Product {

    @Id
    @GeneratedValue
    @Column(name = "ID",unique = true)
    private int id;

    @Column(name="NAME",nullable = false)
    private String name;

    @Column(name="QUANTITY",nullable = false)
    private int quantity;

    @Column(name="DESCRIPTION")
    private String description;

    @ManyToOne
    @JoinColumn(name = "FK_SUPPLIER")
    private Supplier supplier;

    public Product() {
    }

    public Product(String name, int quantity, String description,Supplier supplier) {
        this.name = name;
        this.quantity = quantity;
        this.description = description;
        this.supplier = supplier;
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

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Supplier getSupplier() {
        return supplier;
    }

    public void setSupplier(Supplier supplier) {
        this.supplier = supplier;
    }

    @Override
    public String toString() {
        return "Product{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", quantity=" + quantity +
                ", description='" + description + '\'' +
                ", supplier=" + supplier +
                '}';
    }
}
