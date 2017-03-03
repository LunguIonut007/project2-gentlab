package com.lunguioan.server.model;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

/**
 * Created by Ionut on 2/11/17.
 * supplier object that maps SUPPLIER table
 */

@Entity
@Table(name="SUPPLIER")
public class Supplier {

    @Id
    @GeneratedValue
    @Column(name = "ID",unique = true)
    private int id;

    @Column(name="NAME",nullable = false)
    private String name;

    @Column(name="ADDRESS")
    private String address;

    @OneToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL,mappedBy = "supplier")
    private List<Product> productList;


    public Supplier() {
    }

    public Supplier(String name, String address) {
        this.name = name;
        this.address = address;
        productList = new ArrayList<>();
    }

    public List<Product> getProductList() {
        return productList;
    }

    public void setProductList(List<Product> productList) {
        this.productList = productList;
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
