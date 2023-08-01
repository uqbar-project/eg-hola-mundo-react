import { render, screen } from '@testing-library/react'
import { describe, expect, test } from 'vitest'

import Saludo from './Saludo'

describe('Saludo', () => {
  describe('cuando le paso un nombre', () => {
    test('lo muestra', () => {
      render(<Saludo nombre='Manola' />)
      const appIntro = screen.getByTestId('saludo').textContent
      expect(appIntro).to.equal('Hola, Manola')
    })
  })

  describe('cuando no le paso un nombre', () => {
    test('no muestra nada', () => {
      render(<Saludo />)
      const appIntro = screen.getByTestId('saludo').textContent
      expect(appIntro).to.equal('Hola, ')
    })
  })

})
