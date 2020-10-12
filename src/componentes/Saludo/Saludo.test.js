import { render } from '@testing-library/react'
import React from 'react'

import Saludo from './Saludo'

describe('Saludo', () => {
  describe('cuando le paso un nombre', () => {
    it('lo muestra', () => {
      const { getByTestId } = render(<Saludo nombre='Manola' />)
      const appIntro = getByTestId('saludo')
      expect(appIntro).toHaveTextContent('Hola, Manola')
    })
  })

  describe('cuando no le paso un nombre', () => {
    it('no muestra nada', () => {
      const { getByTestId } = render(<Saludo />)
      const appIntro = getByTestId('saludo')
      expect(appIntro).toHaveTextContent('Hola,')
    })
  })

})
