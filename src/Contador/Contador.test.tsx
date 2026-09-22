import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, test } from 'vitest'

import { Contador } from './Contador'

describe('Contador', () => {
  describe('cuando se suma', () => {
    test('el contador incrementa', async () => {
      // Arrange
      render(<Contador />)

      // Act
      const botonSumar = screen.getByTestId('sumar')
      await userEvent.click(botonSumar)
      await userEvent.click(botonSumar)
      await userEvent.click(botonSumar)

      // Assert
      const valor = screen.getByTestId('contadorValue').textContent
      expect(valor).to.equal('3')
    })
  })

  describe('cuando se resta', () => {
    test('el contador decrementa', async () => {
      // Arrange
      render(<Contador />)

      // Act
      const botonRestar = screen.getByTestId('restar')
      await userEvent.click(botonRestar)
      await userEvent.click(botonRestar)

      // Assert
      const valor = screen.getByTestId('contadorValue').textContent
      expect(valor).to.equal('-2')
    })
  })
})
