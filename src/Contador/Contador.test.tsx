import { screen, render } from '@testing-library/react'
import { act } from 'react'
import { describe, expect, test } from 'vitest'

import { Contador } from './Contador'

describe('Contador', () => {

  describe('cuando se suma', () => {
    test('el contador incrementa', () => {
      // Arrange
      render(<Contador />)
      
      // Act
      const botonSumar = screen.getByTestId('sumar')
      act(() => { botonSumar.click() })
      act(() => { botonSumar.click() })
      act(() => { botonSumar.click() })
      const valor = screen.getByTestId('contadorValue').textContent

      // Assert
      expect(valor).to.equal('3')
    })
  })

  describe('cuando se resta', () => {
    test('el contador decrementa', () => {
      render(<Contador />)
      const botonRestar = screen.getByTestId('restar')
      act(() => { botonRestar.click() })
      act(() => { botonRestar.click() })
      const valor = screen.getByTestId('contadorValue').textContent
      expect(valor).to.equal('-2')
    })
  })

})
