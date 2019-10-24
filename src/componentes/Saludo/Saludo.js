import React from 'react'

const Saludo = (props) => {
    return (
        <p className="App-intro">
            Hola, {props.nombre}
        </p>
    )
}

export default Saludo
