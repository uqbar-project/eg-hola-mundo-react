import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import React from 'react'
import { useState } from 'react'
import './Contador.css'

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
        <Typography variant="h4">
          Contador
        </Typography>
        <h3 data-testid="contadorValue">
          {contador}
        </h3>
        <div class="botonera">
          <Button
            variant="contained" data-testid="restar" size="medium" color="secondary"
            onClick={restar}>-</Button>
          <Button variant="contained" data-testid="sumar" size="medium" color="primary"
          onClick={sumar}>+</Button>
        </div>
      </CardContent>
    </Card>
  )
}