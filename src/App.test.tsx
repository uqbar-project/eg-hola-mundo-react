import { render, screen } from '@testing-library/react'
import { expect, test } from 'vitest'

import App from './App'

test('smoke test for App', () => {
  render(<App />)
  const headings = screen.findByTestId('app')
  expect(headings).toBeTruthy()
})
