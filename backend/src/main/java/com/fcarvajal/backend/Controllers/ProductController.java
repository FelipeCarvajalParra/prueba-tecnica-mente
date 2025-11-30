package com.fcarvajal.backend.Controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fcarvajal.backend.Models.Product;
import com.fcarvajal.backend.Services.ProductService;

@RestController //Controlador Tipo REST
@RequestMapping("/productos")
public class ProductController {

    @Autowired //inyeccion de dependencias 
    private ProductService productService;

    @GetMapping
    public List<Product> all(){
        return productService.all();
    }

    @GetMapping("{id}")
    public ResponseEntity<?> findById(@PathVariable int id){

        try{
            Product product = productService.findById(id);
            return ResponseEntity.ok(product);
        }catch(IllegalArgumentException e){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("ERROR:" + e.getMessage());
        }

    }

    @PostMapping
    public ResponseEntity<?> createProduct(@RequestBody Product p){

        try{
            Product product = productService.createProduct(p);
            return ResponseEntity.status(HttpStatus.CREATED).body(product);
        }catch(IllegalArgumentException e){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("ERROR:" + e.getMessage());
        }

    }

    @PutMapping("{id}")
    public ResponseEntity<?> updateProduct(@RequestBody Product p, @PathVariable int id){
        
        try{
            Product product = productService.updateProduct(p, id);
            return ResponseEntity.ok(product);
        }catch(IllegalArgumentException e){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("ERROR:" + e.getMessage());
        }
    }

    @DeleteMapping("{id}")
    public ResponseEntity<?> deleteProduct(@PathVariable int id){
        
        try{
            String message = productService.deleteProduct(id);
            return ResponseEntity.ok(message);
        }catch(IllegalArgumentException e){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("ERROR:" + e.getMessage());
        }

    }

}
