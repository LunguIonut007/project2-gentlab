package com.lunguioan.server.repository;

import com.lunguioan.server.model.Supplier;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Created by Ionut on 2/11/17.
 */

@Repository
public interface SupplierRepository extends PagingAndSortingRepository<Supplier,Integer> {

    @Query("from Supplier")
    List<Supplier> getAllSuppliers();

    @Query("from Supplier supplier order by supplier.id desc")
    List<Supplier> getLastNSuppliers(Pageable pageable);
}
