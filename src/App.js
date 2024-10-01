
import React, {useState } from 'react';
import './App.css';
import { Tarea } from './componentes/Tarea';
import { TareasCompletas } from './componentes/TareasCompletas';
import { Buscador } from './componentes/Buscador';
import { BotonAgregar } from './componentes/Boton';
import { ModalAgregarTarea } from './componentes/modalBontonAgregar';

function App() {

  const [searchTerm, setSearchTerm] = useState('');
  const [tareas, setTareas] = useState([]);
  const [isModalOpen, setIsModalOpen ] = useState(false);

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const filtrarTareas = tareas.filter(tarea =>
    tarea.text.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDelete = (id) => {
    setTareas(tareas.filter(tarea => tarea.id !== id));
  }

  const handleToggleComplete = (id) => {
    setTareas(tareas.map(tarea =>
      tarea.id === id ? { ...tarea, completed: !tarea.completed } : tarea
    ));
  };

  const handleAddTarea = (text) => {
    const nuevaTarea = {
      id: tareas.length + 1,
      text,
      completed: false
    };
    setTareas([...tareas, nuevaTarea]);
  }

  return (
    <div className='cuerpo'>
      <TareasCompletas className='cuerpo' tareas={tareas} />
      <Buscador className='cuerpo' onSearch={handleSearch} />
      {filtrarTareas.map(tarea => (
        <Tarea className='cuerpo' key={tarea.id} tarea={tarea} onDelete={handleDelete} onToggleComplete={handleToggleComplete} />
      ))}
      <BotonAgregar onOpenModal={() => setIsModalOpen(true)} />
      
      {isModalOpen && (
        <ModalAgregarTarea onClose={() => setIsModalOpen(false)} onAdd={handleAddTarea} />
      )}

    </div>
  );


/*  return (
    <div>
      <TareasCompletas />
      <Buscador />
      <Tarea />
      <Tarea />
      <Tarea />
    </div>
  );*/
}


export default App;
