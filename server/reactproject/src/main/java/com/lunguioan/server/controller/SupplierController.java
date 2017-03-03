package com.lunguioan.server.controller;

import com.lunguioan.server.dto.SupplierDto;
import com.lunguioan.server.model.Supplier;
import com.lunguioan.server.service.SupplierService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Created by Ionut on 2/21/17.
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
    public SupplierDto getSupplier(@PathVariable int supplierId) {
        return supplierService.getSupplier(supplierId);
    }

    @PutMapping("/{supplierId}")
    public SupplierDto editSupplier(@PathVariable("supplierId")int supplierId, @RequestBody SupplierDto supplierDto) {
        return supplierService.editSupplier(supplierId,supplierDto);
    }

    @PostMapping("/add")
    public void createSupplier(@RequestBody SupplierDto supplierDto) {
        supplierService.saveSupplier(supplierDto.resolve(new Supplier()));
    }

    @GetMapping("/getLastSuppliers")
    public List<SupplierDto> getLastSuppliers(@RequestParam(value = "number",defaultValue = "5")int numberOfSuppliers) {
        return supplierService.getLastNSuppliers(numberOfSuppliers);
    }

    @DeleteMapping("/delete/{supplierId}")
    public void deleteSupplier(@PathVariable("supplierId") int supplierId) {
        supplierService.deleteSupplier(supplierId);
    }


}
