import React from 'react'
import PropTypes from 'prop-types'

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
