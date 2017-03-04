package com.lunguioan.server.controller;

import com.lunguioan.server.dto.SupplierDto;
import com.lunguioan.server.exception.NameException;
import com.lunguioan.server.model.Supplier;
import com.lunguioan.server.service.SupplierService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

/**
 * Created by Ionut on 2/21/17.
 * Spring controller for handling CRUD mapping for Supplier object
 */

@RestController
@RequestMapping("/api/suppliers")
public class SupplierController {

    @Autowired
    private SupplierService supplierService;

    @GetMapping
    public List<SupplierDto> getAllSuppliers() {
        return supplierService.getAllSuppliers();
    }

    @GetMapping("/{supplierId}")
    public SupplierDto getSupplierById(@PathVariable int supplierId) {
        return supplierService.getSupplier(supplierId);
    }

    @PutMapping("/{supplierId}")
    public SupplierDto editSupplier(@PathVariable("supplierId")int supplierId, @RequestBody @Valid SupplierDto supplierDto)  throws NameException {
        return supplierService.editSupplier(supplierId,supplierDto);
    }

    @PostMapping("/add")
    public void createSupplier(@RequestBody @Valid SupplierDto supplierDto) throws  NameException {
        supplierService.saveSupplier(supplierDto.resolve(new Supplier()));
    }

    //gets last n suppliers; if the number is not specified in query, default to 5
    @GetMapping("/getLastSuppliers")
    public List<SupplierDto> getLastSuppliers(@RequestParam(value = "number",defaultValue = "5")int numberOfSuppliers) {
        return supplierService.getLastNSuppliers(numberOfSuppliers);
    }

    @DeleteMapping("/delete/{supplierId}")
    public void deleteSupplier(@PathVariable("supplierId") int supplierId) {
        supplierService.deleteSupplier(supplierId);
    }


}
