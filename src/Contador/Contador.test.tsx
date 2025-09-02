import { screen, render, waitFor } from '@testing-library/react'
import { describe, expect, test } from 'vitest'

import { Contador } from './Contador'

describe('Contador', () => {

  describe('cuando se suma', () => {
    test('el contador incrementa', async () => {
      // Arrange
      render(<Contador />)
      
      // Act
      const botonSumar = screen.getByTestId('sumar')
      await waitFor(() => {
        botonSumar.click()
        botonSumar.click()
        botonSumar.click()
        // Assert
        const valor = screen.getByTestId('contadorValue').textContent
        expect(valor).to.equal('3')
      })
    })
  })

  describe('cuando se resta', () => {
    test('el contador decrementa', async () => {
      render(<Contador />)
      const botonRestar = screen.getByTestId('restar')
      await waitFor(() => {
        botonRestar.click()
        botonRestar.click()
        // Assert
        const valor = screen.getByTestId('contadorValue').textContent
        expect(valor).to.equal('-2')
      })
    })
  })

})
