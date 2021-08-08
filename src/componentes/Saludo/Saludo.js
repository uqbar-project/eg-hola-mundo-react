import React from 'react'

const Saludo = (props) => {
  return (
    <p data-testid="saludo">
      Hola, {props.nombre}
    </p>
  )
}

Saludo.propTypes = {
  nombre: PropTypes.string,
}

export default Saludo
