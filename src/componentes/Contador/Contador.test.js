import { screen, render } from '@testing-library/react'
import React from 'react'
import { act } from 'react-dom/test-utils'

import { Contador } from './Contador'

describe('Contador', () => {
  describe('cuando se suma', () => {
    it('el contador incrementa', async () => {
      render(<Contador />)
      const botonSumar = screen.getByTestId('sumar')
      act(() => { botonSumar.click() })
      act(() => { botonSumar.click() })
      act(() => { botonSumar.click() })
      const valor = screen.getByTestId('contadorValue')
      expect(valor).toHaveTextContent('3')
    })


  })
  describe('cuando se resta', () => {
    it('el contador decrementa', async () => {
      render(<Contador />)
      const botonSumar = screen.getByTestId('restar')
      act(() => { botonSumar.click() })
      act(() => { botonSumar.click() })
      const valor = screen.getByTestId('contadorValue')
      expect(valor).toHaveTextContent('-2')
    })
  })
})
