import React from 'react'
import App from './App'
import { shallow } from 'enzyme'

it('app levanta ok', () => {
  shallow(<App />)
})
