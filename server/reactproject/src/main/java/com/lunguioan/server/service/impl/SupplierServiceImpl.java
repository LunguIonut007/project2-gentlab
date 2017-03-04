package com.lunguioan.server.service.impl;

import com.lunguioan.server.dto.SupplierDto;
import com.lunguioan.server.exception.NameException;
import com.lunguioan.server.model.Supplier;
import com.lunguioan.server.repository.SupplierRepository;
import com.lunguioan.server.service.SupplierService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

/**
 * Created by Ionut on 2/14/17.
 * the service uses Java 8 stream to rapidly convert from objects to dtoObjects
 * example:
 * the suppliers.stream().map(SupplierDto::new).collect(Collectors.toList()); is equal to
 *
 * List<SupplierDto> supplierDtoList = new ArrayList<>();
 * for for(Supplier supplier : suppliers) {
 *     supplierDtoList.add(new SupplierDto(supplier));
 * }
 *
 * for more information search Java 8 streams and method reference
 */
@Service
public class SupplierServiceImpl implements SupplierService {

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
    public SupplierDto saveSupplier(Supplier supplier) throws NameException {
        if(supplierRepository.nameExists(supplier.getName())) {
            throw new NameException("name");
        }
        return new SupplierDto(supplierRepository.save(supplier));
    }

    @Override
    public SupplierDto editSupplier(int supplierId, SupplierDto supplierDto) throws NameException  {

        if(supplierRepository.nameExistsExceptOwner(supplierDto.getName(), supplierId)) {
            throw new NameException("name");
        }
        else {
            Supplier supplier = supplierRepository.findOne(supplierId);
            supplierDto.resolve(supplier);

            supplierRepository.save(supplier);

            return new SupplierDto(supplier);
        }
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
}
