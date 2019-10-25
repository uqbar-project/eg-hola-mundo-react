import React from 'react'
import logo from './logo.svg'
import './App.css'
import Contador from './componentes/Contador/Contador'
import Saludo from './componentes/Saludo/Saludo'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">React - Hola mundo!</h1>
      </header>
      <Saludo nombre="Martín" />
      <Saludo nombre="Mariano" />
      <Contador />
      <Contador />
    </div>
  )
}


export default App
