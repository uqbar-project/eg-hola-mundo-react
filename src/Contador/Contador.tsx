import { useState } from 'react'
import './Contador.css'

export const Contador = () => {
  const [contador, setContador] = useState(0)

  const sumar = () => {
    setContador(contador + 1)
  }

  const restar = () => {
    setContador(contador - 1)
  }

  return (
    <div className="card">
      <div className="title">
          Contador
      </div>
      <div data-testid="contadorValue" className="contador">
        {contador}
      </div>
      <div className="botonera">
        <button
          className="secondary" data-testid="restar" color="secondary"
          onClick={restar}>-</button>
        <button className="primary" data-testid="sumar" color="primary"
        onClick={sumar}>+</button>
      </div>
    </div>
  )
}