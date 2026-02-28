const { createApp, ref, onMounted } = Vue;

createApp({
    setup() {
        const tasks = ref([]);
        const newTaskText = ref('');
        const loading = ref(true);
        const API_URL = 'http://localhost:3000/tasks';

        //Ciclo de vida para carga inicial 
        const fetchTasks = async () => {
            try {
                loading.value = true;
                const response = await fetch(API_URL);
                tasks.value = await response.json();
            } catch (error) {
                console.error("Error al obtener tareas:", error);
            } finally {
                loading.value = false;
            }
        };


        const addTask = async () => {
            if (!newTaskText.value.trim()) return;

            try {
                const response = await fetch(API_URL, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ text: newTaskText.value })
                });

                if (response.ok) {
                    const newTask = await response.json();
                    tasks.value.push(newTask); // aqui actualiza el DOM inmediatamente 
                    newTaskText.value = '';
                }
            } catch (error) {
                console.error("Error al agregar:", error);
            }
        };


        const deleteTask = async (id) => {
            try {
                const response = await fetch(`${API_URL}/${id}`, {
                    method: 'DELETE'
                });

                if (response.status === 204) {
                    // aqui remueve de la vista inmediatamente 
                    tasks.value = tasks.value.filter(t => t.id !== id);
                }
            } catch (error) {
                console.error("Error al eliminar:", error);
            }
        };

        // Se ejecuta al montar el componente para cargar las tareas iniciales
        onMounted(fetchTasks);

        return {
            tasks,
            newTaskText,
            loading,
            addTask,
            deleteTask
        };
    }
}).mount('#app');