package com.fcarvajal.backend.Services;

import java.util.List;
import java.util.concurrent.atomic.AtomicInteger;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fcarvajal.backend.Models.Product;
import com.fcarvajal.backend.Repositorys.ProductRepository;

@Service
public class ProductService {

    private static AtomicInteger idGenerator = new AtomicInteger(1);
    private List<Product> productList;

    @Autowired
    private ProductRepository repository;

    @Autowired
    public ProductService(ProductRepository repository) {
        this.repository = repository;
        this.productList = repository.all(); //iniciamos la lista en 0
    }

    public List<Product> all(){
        return repository.all();
    }

    public Product findById(int id){

        Product product = repository.findById(id);

        if(product == null){
            throw new IllegalArgumentException("El ID ingresado no existe");
        }

        return product;
        
    }

    public Product createProduct(Product p) {

        //validar nombre obligatorio
        if(p.getName() == null || p.getName().trim().isEmpty()){ 
            throw new IllegalArgumentException("El nombre del producto es obligatorio");
        }

        //validar precio mayor a 0
        if(p.getPrice() <= 0){ 
            throw new IllegalArgumentException("El precio debe ser mayor a 0");
        }

        //valida que no exista nombre repetido
        for (Product prod : productList) {
            if (prod.getName().equalsIgnoreCase(p.getName())){
                throw new IllegalArgumentException("El nombre ingresado ya se encuentra registrado");
            }
        }

        p.setId(idGenerator.getAndIncrement());

        return repository.createProduct(p);
    }

    public Product updateProduct(Product p, int id){

        for(Product product : productList){ //validar ID existente
            if(product.getId() == id){

                //validar nombre obligatorio
                if(p.getName() == null || p.getName().trim().isEmpty()){ 
                    throw new IllegalArgumentException("El nombre del producto es obligatorio");
                }

                //validar precio mayor a 0
                if(p.getPrice() <= 0){ 
                    throw new IllegalArgumentException("El precio debe ser mayor a 0");
                }

                //valida que no exista nombre repetido
                for (Product prod : repository.all()){
                    if (prod.getName().equalsIgnoreCase(p.getName()) && prod.getId() != id){
                        throw new IllegalArgumentException("El nombre ingresado ya se encuentra registrado");
                    } 
                }

                return repository.updateProduct(p, id);
            }
        }

        throw new IllegalArgumentException("El ID ingresado no existe");
    }

    public String deleteProduct(int id){

        boolean removed = repository.deleteProduct(id);

        if (!removed){
            throw new IllegalArgumentException("El ID ingresado no existe");
        }

        return "Producto eliminado correctamente";
    }

}
