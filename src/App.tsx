import './App.css'
import { Contador } from './Contador/Contador'
import Saludo from './Saludo/Saludo'

const App = () => (
  <div className="App">
    <Saludo nombre="Martín" />
    <Saludo nombre="Mariano" />
    <Contador />
    <Contador />
  </div>
)

export default App
