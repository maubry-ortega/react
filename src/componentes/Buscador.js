import React,{ useState } from "react";

function Buscador({ onSearch }) {

    const[n, setN] = useState("");

    const handleChange = ({target}) => {
        const nuevoValor = target.value;
        setN(nuevoValor);
        onSearch(nuevoValor);
    };



    return(
        <>
            <input type="text" placeholder='Ingresa tu busqueda' onChange={handleChange} value={n}></input>
        </>
    );
}

export {Buscador}