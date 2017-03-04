package com.lunguioan.server.repository;

import com.lunguioan.server.model.Supplier;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Created by Ionut on 2/11/17.
 */

@Repository
public interface SupplierRepository extends PagingAndSortingRepository<Supplier,Integer> {

    //select all objects from the SUPPLIER table
    @Query("from Supplier")
    List<Supplier> getAllSuppliers();

    //orders the table descending and sends the top n values
    @Query("from Supplier supplier order by supplier.id desc")
    List<Supplier> getLastNSuppliers(Pageable pageable);

    //verify if the name already exists in the database
    @Query("select count(s)>0 from Supplier s where s.name= :name")
    boolean nameExists(@Param("name") String name);
}
