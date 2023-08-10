package com.indatacore.backend.service.impls;

import com.indatacore.backend.dtos.ProductDTO;
import com.indatacore.backend.entities.Product;
import com.indatacore.backend.mappers.ProductMapper;
import com.indatacore.backend.repositories.ProductRepository;
import com.indatacore.backend.service.spesc.ProductService;
import com.opencsv.CSVReader;
import com.opencsv.exceptions.CsvValidationException;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.util.ResourceUtils;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Random;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class ProductServiceImpl implements ProductService {
    private ProductRepository productRepository ;
    private ProductMapper productMapper ;

    private static final String[] RANDOM_NAMES = {
             "T-shirt", "Jeans", "Backpack", "Hat", "Dress", "Jacket", "Sneakers"
    };
    private static final String[] RANDOM_DESCRIPTIONS = {
            "High-quality product", "Comfortable and stylish", "Perfect for any occasion",
            "Durable and long-lasting", "Available in various colors", "Limited edition item",
            "Made from premium materials"
    };
    @Override
    public List<ProductDTO> getAllProducts() {
        return productRepository.findAll()
                .stream()
                .map(product -> productMapper.fromProduct(product))
                .collect(Collectors.toList());
    }

    @Override
    public ProductDTO addProduct(ProductDTO productDTO) {
        Product product = productMapper.fromProductDTO(productDTO) ;
        return productMapper.fromProduct(productRepository.save(product));
    }

    @Override
    public ProductDTO addProduct() {
        ProductDTO productDTO = new ProductDTO();
        Random random = new Random();
        int randomIndex = random.nextInt(RANDOM_NAMES.length);
        productDTO.setName(RANDOM_NAMES[randomIndex]);
        productDTO.setDescription(RANDOM_DESCRIPTIONS[randomIndex]);
        productDTO.setPrice(50 + (1000 - 50) * random.nextDouble());

        return addProduct(productDTO);
    }

    @Override
    public boolean loadProductsFromCSV() throws IOException, CsvValidationException {
        List<Product> products = new ArrayList<>();
            File file = ResourceUtils.getFile("src/main/resources/produts.csv");
            CSVReader reader = new CSVReader(new FileReader(file));
            String[] line;
            while ((line = reader.readNext()) != null) {
                Product product = new Product();
                product.setName(line[0]);
                product.setDescription(line[1]);
                product.setPrice(Double.parseDouble(line[2]));
                products.add(product);
            }
            reader.close();
            products.forEach(product -> productRepository.save(product));


        return true ;  }
}
