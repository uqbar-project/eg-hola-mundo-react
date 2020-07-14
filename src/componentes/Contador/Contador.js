import React, { useState } from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

const Contador = () => {
  const [contador, setContador] = useState(0)

  const sumar = () => {
    cambiarContador(contador + 1)
  }

  const restar = () => {
    cambiarContador(contador - 1)
  }

  const cambiarContador = (n) => {
    setContador(n)
  }

  return (
    <Card>
      <CardContent>
        <Typography gutterBottom variant="h3" component="h2">
          Contador
        </Typography>
        <h3 id="contadorValue">{contador}</h3>
        <Button variant="contained" id="restar" size="medium" color="secondary" onClick={restar}>
          -
        </Button>
        &nbsp;
        <Button variant="contained" id="sumar" size="medium" color="primary" onClick={sumar}>
          +
        </Button>
        <br />
      </CardContent>
    </Card>
  )
}

export default Contador
