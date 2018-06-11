import React from 'react'
import ReactDOM from 'react-dom'

import 'jest-enzyme'
import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { shallow } from 'enzyme'

import { App, Saludo, Contador } from './App'

configure({ adapter: new Adapter() })

it('renders without crashing', () => {
  shallow(<App />)
})
it('si saludo a Manola me dice Hola Manola', () => {
  const wrapper = shallow(<Saludo nombre='Manola' />)
  const p = wrapper.find('.App-intro')
  expect(p.text()).toBe("Hola, Manola")
})
