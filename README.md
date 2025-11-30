# Prueba tecnica Mente - desarrollador Junior FullStack

Aplicación completa para la gestión de productos, compuesta por un backend en Spring Boot y un frontend en React con Tailwind.

## Despliegue

El proyecto está desplegado usando **servicios gratuitos**:

* **Frontend:** [https://prueba-mente.netlify.app](https://prueba-mente.netlify.app)
* **Backend:** [https://prueba-tecnica-mente.onrender.com](https://prueba-tecnica-mente.onrender.com) 

**Notas importantes sobre el despliegue:**

* Las peticiones entre frontend y backend pueden tardar un poco, ya que ambos servicios gratuitos no tienen la misma velocidad de un servidor dedicado. (Tenga un poco de paciencia si la carga incial se queda en el estado "Cargando...")
* El frontend y el backend están en **diferentes dominios**, por lo que las solicitudes a la API se hacen a otro origen. Por eso se configuró CORS en el backend para permitir que el frontend pueda comunicarse con la API.

## Descripción general

El proyecto permite crear, listar, actualizar y eliminar productos. Se implementan validaciones tanto en el frontend como en el backend para garantizar consistencia de datos y una buena experiencia de usuario.

### Funcionalidades

* Listar productos
* Crear productos
* Editar productos
* Eliminar productos
* Validaciones de formulario en frontend y backend

## Tecnologías utilizadas

* **Backend:** Spring Boot, Java
* **Frontend:** React, Tailwind CSS, JavaScript
* **Herramientas adicionales:** Insomnia para pruebas de API, npm para gestión de dependencias

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
4. Probar los endpoints usando Postman.

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
4. Abrir [http://localhost:5173/](http://localhost:5173/) en el navegador.


## Endpoints principales del backend

> Nota: Los endpoints están en el backend desplegado en Render, por lo que no comparten dominio con el frontend.

| Método | Endpoint        | Descripción                     |
| ------ | --------------- | ------------------------------- |
| GET    | /productos      | Obtiene todos los productos     |
| GET    | /productos/{id} | Obtiene un producto por ID      |
| POST   | /productos      | Crea un nuevo producto          |
| PUT    | /productos/{id} | Actualiza un producto existente |
| DELETE | /productos/{id} | Elimina un producto por ID      |
