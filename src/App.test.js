import React from 'react'
import ReactDOM from 'react-dom'

import 'jest-enzyme'
import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { shallow } from 'enzyme'

import { App, Saludo, Contador } from './App'

configure({ adapter: new Adapter() })

it('app levanta ok', () => {
  shallow(<App />)
})
it('si saludo a Manola me dice Hola Manola', () => {
  const wrapper = shallow(<Saludo nombre='Manola' />)
  const p = wrapper.find('.App-intro')
  expect(p.text()).toBe("Hola, Manola")
})
it('sumar - contador de 0 a 3', () => {
  const wrapper = shallow(<Contador/>)
  const btnSumar = wrapper.find('#sumar')
  btnSumar.simulate('click')
  btnSumar.simulate('click')
  btnSumar.simulate('click')
  const contador = wrapper.find('#contadorValue')
  expect(contador.text()).toBe("3")
})
it('resta - contador de 0 a -2', () => {
  const wrapper = shallow(<Contador/>)
  const btnRestar = wrapper.find('#restar')
  btnRestar.simulate('click')
  btnRestar.simulate('click')
  const contador = wrapper.find('#contadorValue')
  expect(contador.text()).toBe("-2")
})
