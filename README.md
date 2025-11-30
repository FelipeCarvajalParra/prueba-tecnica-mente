# Proyecto de Gestión de Productos

Aplicación completa para la gestión de productos, compuesta por un backend en Spring Boot y un frontend en React con Tailwind.

## Descripción general

El proyecto permite crear, listar, actualizar y eliminar productos en memoria. Se implementan validaciones tanto en el frontend como en el backend para garantizar consistencia de datos y una buena experiencia de usuario.

### Funcionalidades

* Listar productos
* Crear productos
* Editar productos
* Eliminar productos
* Validaciones de formulario en frontend y backend

## Tecnologías utilizadas

**Backend:** Spring Boot, Java
**Frontend:** React, Tailwind CSS, JavaScript
**Herramientas adicionales:** Postman para pruebas de API, npm para gestión de dependencias

## Estructura del proyecto

```
/proyecto
 ├─ backend/     # API en Spring Boot
 ├─ frontend/    # Aplicación en React con Tailwind
```

## Cómo correr el proyecto

### Backend

1. Clonar el repositorio y entrar a la carpeta `backend`.
2. Abrir el proyecto en IntelliJ o Eclipse.
3. Ejecutar la clase principal con Spring Boot.
4. Probar los endpoints usando Postman o curl.

### Frontend

1. Entrar a la carpeta `frontend`.
2. Instalar dependencias con:

   ```bash
   npm install
   ```
3. Iniciar la aplicación:

   ```bash
   npm start
   ```
4. Abrir [http://localhost:3000](http://localhost:3000) en el navegador.

## Notas importantes

* Todos los datos se pierden al reiniciar la aplicación, ya que no se utiliza base de datos.
* La interfaz y la API están completamente en español.
* El proyecto está diseñado para ser sencillo, enfocado en demostrar las operaciones CRUD y la comunicación entre frontend y backend.

## Endpoints principales del backend

| Método | Endpoint        | Descripción                     |
| ------ | --------------- | ------------------------------- |
| GET    | /productos      | Obtiene todos los productos     |
| GET    | /productos/{id} | Obtiene un producto por ID      |
| POST   | /productos      | Crea un nuevo producto          |
| PUT    | /productos/{id} | Actualiza un producto existente |
| DELETE | /productos/{id} | Elimina un producto por ID      |
