package com.indatacore.backend.controllers;

import com.indatacore.backend.dtos.ProductDTO;
import com.indatacore.backend.service.spesc.ProductService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;

import io.swagger.v3.oas.annotations.Operation;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@AllArgsConstructor
@Api(tags = "Product API")
public class ProductController {
  private   ProductService productService ;

    @GetMapping("/products")
    @Operation(summary = "Get products", description = "Get a list of Products")

    List<ProductDTO> getAllProduct(){
        return productService.getAllProducts();
    }

    @PostMapping("/addProduct")
    @Operation(summary = "Add product", description = "Add a new product")

    ProductDTO addProduct(@RequestBody ProductDTO productDTO){
        System.out.println(productDTO);
        return  productService.addProduct(productDTO);
    }

    @PostMapping(  "/addRandomProduct")
    @Operation(summary = "Add random product", description = "Add a new product with random data")
    ProductDTO addProduct(){
        return  productService.addProduct();
    }
}
