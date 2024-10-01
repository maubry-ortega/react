import React from "react";

function BotonAgregar({ onOpenModal }) {

    return (
        <button className="BtnAgregar" onClick={onOpenModal}>
            Agregar Tarea
        </button>
    );
}

export {BotonAgregar}