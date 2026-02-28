# 🚀 Gestor de Tareas  
### 📚 Actividad Académica – Universidad

Este proyecto corresponde a una **actividad universitaria** cuyo objetivo es implementar un sistema de gestión de tareas utilizando una arquitectura cliente-servidor con comunicación asíncrona (AJAX).

La aplicación permite crear, visualizar y eliminar tareas sin recargar la página, siguiendo el enfoque de **Single Page Application (SPA)**.

---

## 🛠️ Tecnologías Utilizadas

- Frontend: HTML, CSS, JavaScript  
- Backend: Node.js  
- Comunicación: AJAX (Fetch API)  
- Formato de datos: JSON  

---

## 🔄 Funcionamiento del Sistema

### 1️⃣ Carga Inicial de Datos (GET)

Al iniciar la aplicación:

- El **Frontend** realiza automáticamente una petición GET al servidor.
- El **Backend** responde con un arreglo de 5 tareas en formato JSON.
- Las tareas se renderizan dinámicamente en el DOM sin recargar la página.

---

### 2️⃣ Agregar Nueva Tarea (POST)

Cuando el usuario ingresa una tarea y presiona **"Agregar"**:

- Se envía un objeto JSON al servidor.
- El Backend genera un **ID único**.
- La tarea se almacena en memoria.
- La respuesta del servidor permite actualizar la interfaz en tiempo real.

---

### 3️⃣ Eliminar Tarea (DELETE)

Al presionar el botón de eliminar:

- Se envía el **ID** de la tarea al servidor.
- El Backend elimina la tarea correspondiente.
- La interfaz se actualiza inmediatamente tras recibir la confirmación (status 204).

---

## 🖥️ Logs en Servidor

```bash
Peticion GET: Enviando lista de tareas
Peticion POST: Tarea agregada con exito
Peticion DELETE: Tarea eliminada del servidor
```

---

## 🎯 Objetivo Académico

Demostrar el funcionamiento de:

- Arquitectura cliente-servidor  
- Comunicación asíncrona  
- Manipulación dinámica del DOM  
- Uso de JSON para intercambio de datos  

---

## 📌 Estado del Proyecto

✔ Funcional  
✔ Comunicación Frontend-Backend implementada  
✔ Operaciones CRUD básicas (Create, Read, Delete)
