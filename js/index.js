const input = document.getElementById("input");
const btnAgregar = document.getElementById("btn-agregar");
const tareasContainer = document.getElementById("tareas-container");

btnAgregar.addEventListener("click", () => {

    if (input.value.trim() != "") {

        const tareaContainer = document.createElement("div");
        tareaContainer.classList.add("tareas-container", "visible");

        const divTarea = document.createElement("div");
        divTarea.classList.add("div-tareas");
        const pTarea = document.createElement("p");
        pTarea.textContent = input.value;
        divTarea.appendChild(pTarea);
        tareaContainer.appendChild(divTarea);

        const divBtn = document.createElement("div");
        divBtn.classList.add("div-btn");
        const btnModificar = document.createElement("button");
        btnModificar.classList.add("btn-modificar");
        btnModificar.innerText = "Modificar";
        const btnEliminar = document.createElement("button");
        btnEliminar.classList.add("btn-eliminar");
        btnEliminar.innerText = "Eliminar";
        divBtn.appendChild(btnModificar);
        divBtn.appendChild(btnEliminar);
        tareaContainer.appendChild(divBtn);

        tareasContainer.appendChild(tareaContainer);

        input.value = "";

        btnEliminar.addEventListener("click", () => {
            Swal.fire({
                title: "Deseas eliminar la tarea?",
                text: "Podrás agregar cuando quieras!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Si, eliminar tarea!"
            }).then((result) => {
                if (result.isConfirmed) {
                    Swal.fire({
                        title: "Tarea eliminada!",
                        icon: "success"
                    });
                    tareasContainer.removeChild(tareaContainer);
                }
            });
        })

        btnModificar.addEventListener("click", () => {
            Swal.fire({
                title: 'Modificar tarea',
                input: 'text',
                inputLabel: 'Editar tarea',
                inputValue: pTarea.textContent,
                showCancelButton: true,
                confirmButtonText: 'Guardar',
                cancelButtonText: 'Cancelar',
                inputValidator: (value) => {
                    if (!value.trim()) {
                        return 'La tarea no puede quedar vacía';
                    }
                }
            }).then((result) => {
                if (result.isConfirmed) {
                    pTarea.textContent = result.value.trim();
                    Swal.fire('Guardado', 'La tarea fue modificada', 'success');
                }
            });
        });
    }
})