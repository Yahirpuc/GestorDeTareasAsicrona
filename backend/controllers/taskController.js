// Arreglo inicial de 5 tareas normales
let tasks = [
    { id: 1, text: "Revisar correos pendientes" },
    { id: 2, text: "Comprar despensa de la casa" },
    { id: 3, text: "Lleva la cartulina ala universidad" },
    { id: 4, text: "Actualizar la base de datos" },
    { id: 5, text: "Hacer una fiesta el domingo en mi casa" }
];

exports.getAllTasks = (req, res) => {
    console.log("Peticion GET: Enviando lista de tareas");
    res.json(tasks);
};

exports.createTask = (req, res) => {
    const newTask = {
        id: Date.now(),
        text: req.body.text
    };
    tasks.push(newTask);
    console.log("Peticion POST: Tarea agregada con exito");
    res.status(201).json(newTask);
};

exports.deleteTask = (req, res) => {
    const id = parseInt(req.params.id);
    tasks = tasks.filter(t => t.id !== id);
    console.log("Peticion DELETE: Tarea eliminada del servidor");
    res.status(204).send();
};