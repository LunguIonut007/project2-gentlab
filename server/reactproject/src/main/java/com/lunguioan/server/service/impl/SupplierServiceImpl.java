package com.lunguioan.server.service.impl;

import com.lunguioan.server.dto.SupplierDto;
import com.lunguioan.server.model.Supplier;
import com.lunguioan.server.repository.SupplierRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

/**
 * Created by Ionut on 2/14/17.
 */
@Service
public class SupplierServiceImpl implements com.lunguioan.server.service.SupplierService {

    @Autowired
    private SupplierRepository supplierRepository;

    @Override
    public List<SupplierDto> getAllSuppliers() {
        List<Supplier> suppliers = supplierRepository.getAllSuppliers();

        return suppliers.stream().map(SupplierDto::new).collect(Collectors.toList());
    }

    @Override
    public SupplierDto getSupplier(int supplierId) {
        return new SupplierDto(supplierRepository.findOne(supplierId));
    }

    @Override
    public SupplierDto saveSupplier(Supplier supplier) {
        return new SupplierDto(supplierRepository.save(supplier));
    }

    @Override
    public void deleteSupplier(Supplier supplier) {
       supplierRepository.delete(supplier);
    }

    @Override
    public void deleteSupplier(int supplierId) {
        supplierRepository.delete(supplierId);
    }

    @Override
    public List<SupplierDto> getLastNSuppliers(int numberOfSuppliers) {
        List<Supplier> suppliers = supplierRepository.getLastNSuppliers(new PageRequest(0,numberOfSuppliers));

        return suppliers.stream().map(SupplierDto::new).collect(Collectors.toList());
    }

    @Override
    public SupplierDto editSupplier(int supplierId, SupplierDto supplierDto) {
        Supplier supplier = supplierRepository.findOne(supplierId);
        supplierDto.resolve(supplier);

        supplierRepository.save(supplier);

        return new SupplierDto(supplier);
    }
}
