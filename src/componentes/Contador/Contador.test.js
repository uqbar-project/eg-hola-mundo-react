import React from 'react'
import { shallow } from 'enzyme'
import Contador from './Contador'

const sumar = (contador) => {
  const btnSumar = contador.find({ 'data-testid': 'sumar' })
  btnSumar.simulate('click')
}

const restar = (contador) => {
  const btnRestar = contador.find({ 'data-testid': 'restar' })
  btnRestar.simulate('click')
}

describe('Contador', () => {
  describe('cuando se suma', () => {
    it('el contador incrementa', () => {
      const contador = shallow(<Contador />)
      sumar(contador)
      sumar(contador)
      sumar(contador)
      const valor = contador.find({ 'data-testid': 'contadorValue' })
      expect(valor.text()).toBe("3")
    })
  })
  describe('cuando se resta', () => {
    it('el contador decrementa', () => {
      const contador = shallow(<Contador />)
      restar(contador)
      restar(contador)
      const valor = contador.find({ 'data-testid': 'contadorValue' })
      expect(valor.text()).toBe("-2")
    })
  })
})
