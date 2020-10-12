import React from 'react'

const Saludo = (props) => {
  return (
    <p data-testid="saludo">
      Hola, {props.nombre}
    </p>
  )
}

export default Saludo
