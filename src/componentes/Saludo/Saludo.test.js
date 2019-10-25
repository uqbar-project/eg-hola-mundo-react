import React from 'react'
import { shallow } from 'enzyme'
import Saludo from './Saludo'

describe('Saludo', () => {
    describe('cuando le paso un nombre', () => {
        it('lo muestra', () => {
            const saludo = shallow(<Saludo nombre='Manola' />)
            const p = saludo.find('.App-intro')
            expect(p.text()).toBe("Hola, Manola")
        })
    });

    describe('cuando no le paso un nombre', () => {
        it('no muestra nada', () => {
            const saludo = shallow(<Saludo />)
            const p = saludo.find('.App-intro')
            expect(p.text()).toBe("Hola, ")
        })
    })

})
