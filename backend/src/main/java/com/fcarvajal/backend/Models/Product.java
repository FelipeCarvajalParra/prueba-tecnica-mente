package com.fcarvajal.backend.Models;

import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data //getters y setters se generan automaticamente
@AllArgsConstructor //constructor con todos los campos de la clase como parametros
@NoArgsConstructor //constructor sin parametros
public class Product {
    private int id;

    @JsonProperty("nombre") //exponer nombres en espanol por requisitos especificos de la prueba
    private  String name;

    @JsonProperty("precio")
    private  double price;
}

