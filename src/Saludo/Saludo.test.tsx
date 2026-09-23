import { render, screen } from '@testing-library/react'
import { describe, expect, test } from 'vitest'

import Saludo from './Saludo'

describe('Saludo', () => {
  describe('cuando le paso un nombre', () => {
    test('lo muestra', () => {
      render(<Saludo nombre="Manola" />)
      const saludo = screen.getByTestId('saludo').textContent
      expect(saludo).to.equal('Hola, Manola')
    })
  })

  describe('cuando no le paso un nombre', () => {
    test('no muestra nada', () => {
      render(<Saludo nombre={''} />)
      const saludo = screen.getByTestId('saludo').textContent
      expect(saludo).to.equal('Hola, ')
    })
  })
})
