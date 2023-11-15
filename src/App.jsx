import './App.css'
import { Contador } from './components/Contador/Contador'

import Saludo from './components/Saludo/Saludo'

const App = () => {
  return (
    <div className="App">
      <Saludo nombre="Martín" />
      <Saludo nombre="Mariano" />
      <Contador />
      <Contador />
    </div>
  )
}

export default App
