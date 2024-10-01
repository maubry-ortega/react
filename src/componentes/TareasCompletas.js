import React from "react";
import './tareas.css'

function TareasCompletas({ tareas }) {

    const completadas = tareas.filter(tarea => tarea.completed).length;
    const completasTotal = tareas.length;

    return(
        <>
            <h2>{completadas} de {completasTotal} completadas</h2>
        </>
    );
}

export {TareasCompletas}
