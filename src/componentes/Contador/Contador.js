import React, { Component } from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

export default class Contador extends Component {
    constructor(props) {
        super(props)
        this.state = {
            contador: 0
        }
    }

    sumar = () => {
        this.cambiarContador(this.state.contador + 1)
    }

    restar = () => {
        this.cambiarContador(this.state.contador - 1)
    }

    cambiarContador = (n) => {
        this.setState({ contador: n })
    }

    render() {
        return (
            <Card>
                <CardContent>
                    <Typography gutterBottom variant="h3" component="h2">
                        Contador
            </Typography>
                    <h3 id="contadorValue">
                        {this.state.contador}
                    </h3>
                    <Button
                        variant="contained"
                        id="restar"
                        size="medium"
                        color="secondary"
                        onClick={this.restar}>
                        -
                    </Button>
                    &nbsp;
                    <Button
                        variant="contained"
                        id="sumar"
                        size="medium"
                        color="primary"
                        onClick={this.sumar}>
                        +
                    </Button>
                    <br />
                </CardContent>
            </Card>
        )
    }
}