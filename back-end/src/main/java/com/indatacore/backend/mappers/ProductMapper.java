package com.indatacore.backend.mappers;

import com.indatacore.backend.dtos.ProductDTO;
import com.indatacore.backend.entities.Product;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface ProductMapper {
    ProductDTO fromProduct(Product product) ;
    Product fromProductDTO(ProductDTO productDTO) ;
}
