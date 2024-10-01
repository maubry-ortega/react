import './tareas.css'

function Tarea({ tarea, onDelete, onToggleComplete }) {

    return(
        <div>
            <ul className={`Ntarea`}>
                <span className="Icon Icon-check--active" onClick={() => onToggleComplete(tarea.id)}>{tarea.completed ? '✓': 'V'}
                </span>
                <p className={`Ntarea-p ${tarea.completed ? 'Ntarea-p--complete' : ''}`}>
                    {tarea.text}
                </p>
                <span className="Icon Icon-delete" onClick={() => onDelete(tarea.id)}>X</span>
            </ul>
        </div>

        );
    }

export {Tarea}