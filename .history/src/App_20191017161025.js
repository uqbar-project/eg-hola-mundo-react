import React, {Component} from 'react'
import logo from './logo.svg'
import './App.css'

// Material UI Controls
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

export class Saludo extends Component {
  render() {
    return (
      <p className="App-intro">
        Hola, {this.props.nombre}
      </p>
    )
  }
}

export class Contador extends Component {
  constructor(props) {
    super(props)
    this.state = {
      contador: 0
    }
  }

  sumar() {
    this.cambiarContador(this.state.contador + 1)
  }

  restar() {
    this.cambiarContador(this.state.contador - 1)
  }

  cambiarContador(n) {
    this.setState({contador: n})
  }

  render() {
    return (
      <Card>
        <CardContent>
          <h2>
            Contador
          </h2>
          <h3 id="contadorValue">
            {this.state.contador}
          </h3>
          <Button
            variant="contained"
            id="restar"
            size="medium"
            color="secondary"
            onClick={(event) => {
            this.restar()
          }}>-</Button>
          &nbsp;
          <Button
            variant="contained"
            id="sumar"
            size="medium"
            color="primary"
            onClick={(event) => {
            this.sumar()
          }}>+</Button>
          <br/>
        </CardContent>
      </Card>
    )
  }
}

export class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h1 className="App-title">React - Hola mundo!</h1>
        </header>
        <Saludo nombre="Martín"/>
        <Saludo nombre="Mariano"/>
        <Contador/>
        <Contador/>
      </div>
    )
  }
}

export default App
