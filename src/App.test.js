import { render } from '@testing-library/react'
import React from 'react'

import App from './App'

test('smoke test for App', () => {
  const { getAllByRole } = render(<App />)
  const headings = getAllByRole('heading')
  expect(headings).not.toBe.empty
})
