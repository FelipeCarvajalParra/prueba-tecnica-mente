package com.fcarvajal.backend.Repositorys;

import com.fcarvajal.backend.Models.Product;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;

@Repository
public class ProductRepository {

    private List<Product> productList = new ArrayList<Product>();

    public List<Product> all(){
        return productList;
    }

    public Product findById(int id){

        //filtrar el dato recorriendo el arreglo
        for (int i = 0; i < productList.size(); i++){
            if (productList.get(i).getId() == (id)){
                return productList.get(i);
            }
        }

        return null;

    }

    public Product createProduct(Product p){

        Product product = new Product();

        product.setId(p.getId());
        product.setName(p.getName());
        product.setPrice(p.getPrice());
        productList.add(product);

        return product;

    }

    public Product updateProduct(Product p, int id){

        int pos = 0;

        //se busca la posicion del registro en el arreglo
        for (int i = 0; i < productList.size(); i++){
            if (productList.get(i).getId() == (id)){
                pos = i;
                break;
            } 
        }

        Product product = new Product();

        //se actualiza el registro con la posicion y los respectivos datos
        product.setId(id);
        product.setName(p.getName());
        product.setPrice(p.getPrice());
        productList.set(pos, product);

        return product;

    }

    public boolean deleteProduct(int id){

        return productList.removeIf(x -> x.getId() == id);

    } 

}
