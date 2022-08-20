import { render, screen } from '@testing-library/react'
import React from 'react'

import App from './App'

test('smoke test for App', () => {
  render(<App />)
  const headings = screen.getAllByRole('heading')
  expect(headings).not.toBe('')
})
