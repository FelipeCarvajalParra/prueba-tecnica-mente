# Frontend de Productos
Aplicación frontend en React y Tailwind para gestionar productos consumiendo la API de Spring Boot.

## Descripción
Esta aplicación permite interactuar con la API de productos en memoria desde una interfaz web moderna.  
Funcionalidades principales:

- Listar productos
- Crear nuevos productos
- Editar productos existentes
- Eliminar productos
- Validaciones de formulario del lado del cliente para asegurar datos correctos antes de enviar la solicitud al backend

El diseño utiliza Tailwind CSS para estilos rápidos y responsivos, y React para la lógica de interfaz.

## Validaciones en el Frontend
- Nombre obligatorio
- Precio mayor a 0
- Nombre único (verifica contra los productos ya cargados en la lista)
- Prevención de envíos si los campos no cumplen los requisitos

> Nota: La validación se realiza tanto en el frontend como en el backend, asegurando consistencia y mejor experiencia de usuario.

## Consumo de la API
La aplicación se comunica con la API de Spring Boot que expone los siguientes endpoints:

GET | /productos | Retorna la lista de productos              
GET | /productos/{id} | Retorna un producto por ID                    
POST | /productos + BODY | Crea un nuevo producto                       
PUT | /productos/{id} + BODY | Actualiza un producto existente            
DELETE | /productos/{id} | Elimina un producto por ID      

## Instalación y ejecución
1. Clonar el repositorio.
2. Instalar dependencias con:
   ```bash
   npm install
   ```
3. Iniciar la aplicación en modo desarrollo:
   ```bash
   npm start
   ```
4. Abrir [http://localhost:3000](http://localhost:3000) en el navegador para usar la app.

## Notas adicionales
- Los datos son persistidos únicamente en memoria por el backend, por lo que se pierden al reiniciar la API.
- El diseño y los mensajes están completamente en español, manteniendo coherencia con la API.
