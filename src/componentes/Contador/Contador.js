import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import React, { Component } from 'react'

export default class Contador extends Component {
  constructor(props) {
    super(props)
    this.state = {
      contador: 0
    }
  }

  sumar = () => {
    this.setState({ contador: this.state.contador + 1 })
  }

  restar = () => {
    this.setState({ contador: this.state.contador - 1 })
  }

  render() {
    return (
      <Card>
        <CardContent>
          <Typography gutterBottom variant="h3" component="h2">
            Contador
            </Typography>
          <h3 data-testid="contadorValue">
            {this.state.contador}
          </h3>
          <Button
            variant="contained" data-testid="restar" size="medium" color="secondary"
            onClick={this.restar}>
            -
                    </Button>
                    &nbsp;
                    <Button
            variant="contained" data-testid="sumar" size="medium" color="primary"
            onClick={this.sumar}>
            +
                    </Button>
          <br />
        </CardContent>
      </Card>
    )
  }
}