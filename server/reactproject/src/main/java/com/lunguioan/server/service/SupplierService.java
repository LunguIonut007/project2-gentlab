package com.lunguioan.server.service;

import com.lunguioan.server.dto.SupplierDto;
import com.lunguioan.server.model.Supplier;

import java.util.List;

/**
 * Created by Ionut on 3/3/17.
 */
public interface SupplierService {
    List<SupplierDto> getAllSuppliers();

    SupplierDto getSupplier(int supplierId);

    SupplierDto saveSupplier(Supplier supplier);

    void deleteSupplier(Supplier supplier);

    void deleteSupplier(int supplierId);

    List<SupplierDto> getLastNSuppliers(int numberOfSuppliers);

    SupplierDto editSupplier(int supplierId, SupplierDto supplierDto);
}
