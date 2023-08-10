package com.indatacore.backend;

import com.indatacore.backend.dtos.ProductDTO;
import com.indatacore.backend.entities.Product;
import com.indatacore.backend.service.spesc.ProductService;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import javax.sound.midi.Soundbank;
import java.util.List;

@SpringBootApplication
public class BackEndApplication {

    public static void main(String[] args) {
        SpringApplication.run(BackEndApplication.class, args);
    }

    @Bean
    public CommandLineRunner demo(ProductService productService) {
        return args -> {
            if(productService.loadProductsFromCSV())
                System.out.println("Products are loaded from the CSV file");
            else
                System.out.println("Failed to upload products from the CSV file");
        };
    }

}
