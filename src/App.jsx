import './App.css'

import { Contador } from './componentes/Contador/Contador'
import Saludo from './componentes/Saludo/Saludo'

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
