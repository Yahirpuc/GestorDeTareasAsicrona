# Funcionamiento del Sistema: The Persistence Tasker 🚀

Este sistema es una aplicación de gestión de tareas que utiliza una arquitectura de comunicación asíncrona (AJAX). A continuación se detalla cómo interactúan el Frontend y el Backend:

---

## 🔄 Flujo de Datos y Operaciones

### 1. Carga Inicial de Datos (GET)
Al abrir la aplicación, el **Frontend** ejecuta automáticamente una petición al servidor.
* **Acción**: El navegador solicita la lista de tareas iniciales.
* **Respuesta**: El **Backend** envía un arreglo con 5 objetos JSON.
* **Resultado**: Las tareas se renderizan dinámicamente en el DOM sin recargar la página.

### 2. Inserción de Nueva Tarea (POST)
Cuando el usuario escribe en el input y presiona "Agregar":
* **Acción**: Se envía un objeto JSON con el texto de la tarea hacia el servidor.
* **Procesamiento**: El **Backend** recibe el texto, genera un **ID único** y lo guarda en la memoria.
* **Resultado**: El servidor responde con la tarea creada y el Frontend la añade a la lista visual de inmediato.



### 3. Eliminación de Tarea (DELETE)
Al presionar el botón de eliminar en una tarea específica:
* **Acción**: El cliente identifica la tarea por su **ID** y solicita su eliminación al servidor.
* **Procesamiento**: El **Backend** busca el ID en su arreglo y remueve el objeto correspondiente.
* **Resultado**: Tras la confirmación del servidor (status 204), la tarea desaparece de la interfaz de forma reactiva.

---

## 🖥️ Validación en Consola (Logs)
El sistema confirma cada operación mediante mensajes en la terminal del servidor:
* `Peticion GET: Enviando lista de tareas`
* `Peticion POST: Tarea agregada con exito`
* `Peticion DELETE: Tarea eliminada del servidor`

---

## ✅ Conclusión Técnica
El sistema cumple con el objetivo de mantener una **sincronización constante** entre la interfaz de usuario y el servidor de datos, utilizando el estándar JSON para asegurar que la información sea persistente y la navegación sea fluida (Single Page Application).
