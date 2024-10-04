import { add } from '../utils.js'
import { expect, it } from 'vitest'

it('should add two numbers', () => {
  expect(add(1, 2)).toBe(3)
})
