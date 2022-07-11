const {
  stringRange,
  evenString,
  stringExcept,
  arithmeticSum,
  factorial,
  countDigits,
  sumOfDigits,
  maxMinDiff,
  matrixSum,
  fibonacciSum
} = require('./challenges')

test('String Range', () => {
  expect(stringRange(-3, 5)).toBe('-3 -2 -1 0 1 2 3 4 5')
})

test('Even String', () => {
  expect(evenString([-4, 8, 7, 0, 11, -100])).toBe('-4 8 0 -100')
})

test('String Except', () => {
  expect(stringExcept([1, 3, 2, 3, 3, 3, 4, 3], 3)).toBe('1 2 4')
})

test('Sum Up', () => {
  expect(sumUp(5, 4, 100)).toBe((n/2) * (2*a + 99 * 4))
})

test('Factorial', () => {
  expect(factorial(23)).toBe(25852016738884976640000)
})

test('Count Digits', () => {
  expect(countDigits(918273645)).toBe(9)
})

test('Sum of Digits', () => {
  expect(sumOfDigits(918273645000)).toBe(9 * 10 / 2)
}),

test('Max Min Difference', () => {
  expect(maxMinDiff([-4, -6, 0, 5, 1])).toBe(11)
})

test('Matrix Sum', () => {
  expect(matrixSum([[3, 2], [1, 8], [11, -2]])).toBe(5 + 9 + 9)
})

test('Fibonacci Sum', () => {
  expect(fibonacciSum(100)).toBe(927372692193078999175)
})
