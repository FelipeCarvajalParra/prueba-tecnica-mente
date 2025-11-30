# API de Productos
Backend simple en Spring Boot para gestión de productos en memoria.

## Descripción
Esta API permite gestionar productos sin necesidad de base de datos.  
Funcionalidades principales:

- Listar productos
- Crear productos
- Actualizar productos
- Eliminar productos

Los datos se almacenan en memoria durante la ejecución de la aplicación.

## Endpoints
GET | /productos | Retorna la lista de productos              
GET | /productos/{id} | Retorna un producto por ID                    
POST | /productos + BODY | Crea un nuevo producto                       
PUT | /productos/{id} + BODY | Actualiza un producto existente            
DELETE | /productos/{id} | Elimina un producto por ID        

## Estructura del Body
```json
{
  "nombre": "Producto C",
  "precio": 15000
}
```

-No se acepta campo ID, no se tiene en cuenta si se agrega

## Validaciones
- Nombre obligatorio
- Precio mayor a 0
- Nombre único (no puede repetirse)
- Los IDs se generan automáticamente desde el backend, el usuario no debe enviar ID al crear productos
- Al actualizar un producto, se permite mantener el mismo nombre si no se cambia.


## Cómo correr el proyecto
1. Clonar el repositorio.
2. Abrir el proyecto en IntelliJ o Eclipse.
3. Ejecutar la clase principal con Spring Boot.
4. Probar los endpoints usando Postman o curl.

## Notas adicionales
- Todos los datos se pierden al reiniciar la aplicación, ya que no hay base de datos.
- La API está completamente en español para cumplir con los requisitos de la prueba técnica, el codigo se mantiene en ingles 