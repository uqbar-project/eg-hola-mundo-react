import { render } from '@testing-library/react'
import React from 'react'

import App from './App'

test('smoke test for App', () => {
  const { getByText } = render(<App />)
  const saludoAMariano = getByText(/Mariano/i)
  expect(saludoAMariano).toBeInTheDocument()
})
