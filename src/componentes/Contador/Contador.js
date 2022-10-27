import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import React from 'react'
import { useState } from 'react'

export const Contador = (props) => {
  const [contador, setContador] = useState(0)

  const sumar = () => {
    setContador(contador + 1)
  }

  const restar = () => {
    setContador(contador - 1)
  }

  return (
    <Card>
      <CardContent>
        <Typography gutterBottom variant="h3" component="h2">
          Contador
          </Typography>
        <h3 data-testid="contadorValue">
          {contador}
        </h3>
        <Button
          variant="contained" data-testid="restar" size="medium" color="secondary"
          onClick={restar}>
          -
                  </Button>
                  &nbsp;
                  <Button
          variant="contained" data-testid="sumar" size="medium" color="primary"
          onClick={sumar}>
          +
                  </Button>
        <br />
      </CardContent>
    </Card>
  )
}