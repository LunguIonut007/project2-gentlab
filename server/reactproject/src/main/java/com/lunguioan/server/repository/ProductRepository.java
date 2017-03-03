package com.lunguioan.server.repository;

import com.lunguioan.server.model.Product;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Created by Ionut on 2/14/17.
 */
@Repository
public interface ProductRepository extends PagingAndSortingRepository<Product,Integer> {

    //selects all products from the PRODUCT table
    @Query("from Product")
    List<Product> findAllProducts();

    //orders the table descending and sends the top n values
    @Query("from Product product order by product.id desc")
    List<Product> getLastNProducts(Pageable pageable);
}
