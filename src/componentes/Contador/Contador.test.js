import { render } from '@testing-library/react'
import React from 'react'
import { act } from 'react-dom/test-utils'

import Contador from './Contador'

describe('Contador', () => {
  describe('cuando se suma', () => {
    it('el contador incrementa', async () => {
      const { getByTestId } = render(<Contador />)
      const botonSumar = getByTestId('sumar')
      await act(() => { botonSumar.click() })
      await act(() => { botonSumar.click() })
      await act(() => { botonSumar.click() })
      const valor = await getByTestId('contadorValue')
      expect(valor).toHaveTextContent('3')
    })


  })
  describe('cuando se resta', () => {
    it('el contador decrementa', async () => {
      const { getByTestId } = render(<Contador />)
      const botonSumar = getByTestId('restar')
      await act(() => { botonSumar.click() })
      await act(() => { botonSumar.click() })
      const valor = await getByTestId('contadorValue')
      expect(valor).toHaveTextContent('-2')
    })
  })
})
