import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Saludo extends Component { 
  render() {
    return (
      <p className="App-intro">
        Hola, {this.props.nombre}
      </p>
    )
  }
}

class Contador extends Component { 
  constructor(props) {
    super(props)
    this.state = { contador: 0 }
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
    return (<div>
      <a href="#" onClick={(event) => { this.restar() }}>-</a>
      {this.state.contador}
      <a href="#" onClick={(event) => { this.sumar() }}>+</a>
    </div>)
  }
}


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Saludo nombre="Martín"/>
        <Saludo nombre="Mariano"/>
        <Contador />
      </div>
    );
  }
}


















  


export default App;
