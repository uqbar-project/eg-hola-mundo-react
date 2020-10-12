import { render } from '@testing-library/react'
import React from 'react'

import Contador from './Contador'

describe('Contador', () => {
  describe('cuando se suma', () => {
    it('el contador incrementa', () => {
      const { getByTestId } = render(<Contador />)
      const botonSumar = getByTestId('sumar')
      botonSumar.click()
      botonSumar.click()
      botonSumar.click()
      const valor = getByTestId('contadorValue')
      expect(valor).toHaveTextContent('3')
    })


  })
  describe('cuando se resta', () => {
    it('el contador decrementa', () => {
      const { getByTestId } = render(<Contador />)
      const botonSumar = getByTestId('restar')
      botonSumar.click()
      botonSumar.click()
      const valor = getByTestId('contadorValue')
      expect(valor).toHaveTextContent('-2')
    })
  })
})
