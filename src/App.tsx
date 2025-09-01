import './App.css'
import { Contador } from './Contador/Contador'
import Saludo from './Saludo/Saludo'

const App = () => (
  <div className="App" data-testid="app">
    <Saludo nombre="Martín" />
    <Saludo nombre="Mariano" />
    <hr/>
    <Contador />
    <hr/>
    <Contador />
    <hr/>
  </div>
)

export default App
