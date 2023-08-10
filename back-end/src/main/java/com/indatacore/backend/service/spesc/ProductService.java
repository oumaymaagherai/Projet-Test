package com.indatacore.backend.service.spesc;

import com.indatacore.backend.dtos.ProductDTO;
import com.opencsv.exceptions.CsvValidationException;

import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.List;

public interface ProductService {
    List<ProductDTO> getAllProducts();
    ProductDTO addProduct(ProductDTO productDTO) ;
    ProductDTO addProduct() ;
    boolean loadProductsFromCSV() throws IOException, CsvValidationException;

}
