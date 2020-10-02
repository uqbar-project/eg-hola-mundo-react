import React from 'react'
import './App.css'
import Contador from './componentes/Contador/Contador'
import Saludo from './componentes/Saludo/Saludo'

export default function App() {
  return (
    <div className="App">
      <Saludo nombre="Martín" />
      <Saludo nombre="Mariano" />
      <Contador />
      <Contador />
    </div>
  )
}
