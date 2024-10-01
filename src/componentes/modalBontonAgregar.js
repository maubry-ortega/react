import React, {useState} from "react";
import "./modal.css";

function ModalAgregarTarea({onClose, onAdd}){
    const [nuevaTarea, setNuevaTarea] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (nuevaTarea.trim()){
            onAdd(nuevaTarea);
            setNuevaTarea('');
            onClose();
        }
    };

    return (
        <div className="modal">
            <div className="modal-content">
                <span className="close" onClick={onClose}>&times;</span>
                <h2>Agregar Nueva Tarea</h2>
                <form onSubmit={handleSubmit}>
                    <input type="text" value={nuevaTarea} onChange={(e) => setNuevaTarea(e.target.value)} placeholder="ingresa la nueva tarea" />
                    <button type="submit" className="BtnAgregar">Agregar</button>
                </form>
            </div>
        </div>
    )
}

export {ModalAgregarTarea};

