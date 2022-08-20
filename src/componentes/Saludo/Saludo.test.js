import { render, screen } from '@testing-library/react'
import React from 'react'

import Saludo from './Saludo'

describe('Saludo', () => {
  describe('cuando le paso un nombre', () => {
    it('lo muestra', () => {
      render(<Saludo nombre='Manola' />)
      const appIntro = screen.getByTestId('saludo')
      expect(appIntro).toHaveTextContent('Hola, Manola')
    })
  })

  describe('cuando no le paso un nombre', () => {
    it('no muestra nada', () => {
      render(<Saludo />)
      const appIntro = screen.getByTestId('saludo')
      expect(appIntro).toHaveTextContent('Hola,')
    })
  })

})
