/**
 * 1.
 * Write a function that uses a loop to return a string of all the numbers from a to b (included) separated by a blank space
 * e.g. (2, 5) => "2 3 4 5"
 * @param {number} a
 * @param {number} b
 * @returns {string}
 */
const stringRange = (a, b) => {
  // code here
}

/**
 * 2.
 * Write a function that uses a loop to return the even numbers from the array in a string separated by a space
 * e.g. ([1,4,5,6,7,8,10,13]) => "4 6 8 10"
 * @param {number[]} arr
 * @returns {string}
 */
const evenString = (arr) => {
  // code here
}

/**
 * 3.
 * Write a function that uses a loop returns a space-separated string of all the elements in the array except the number n
 * e.g. ([1,2,3,4], 3) => "1 2 4"
 * @param {number[]} arr 
 * @param {number} n
 * @returns {string}
 */
const stringExcept = (arr, n) => {
  // code here
}

/**
 * 4.
 * Write a function which uses a loop to sum an arithmetic sequence
 * https://mathematico.org/skills/pure/sequences/arithmetic-sequences
 * e.g. (3, 2, 4) => 3 + 5 + 7 + 9 = 24
 * @param {number} a - the first term of the sequence
 * @param {number} d - the common difference in the sequence
 * @param {number} n - the number of terms in the sequence
 * @returns {number}
 */
const sumUp = (n) => {
  // code here
}

/**
 * 5.
 * Write a function that uses a loop to return the factorial of n.
 * (N.b. The factorial of 5 is 5*4*3*2*1 = 120. See here https://en.wikipedia.org/wiki/Factorial).
 * e.g. (4) => 24
 * @param {number} n
 * @returns {number}
 */
const factorial = (a, b) => {
  // code here
}

/**
 * 6.
 * Write a function using a loop to count the number of digits in a given integer
 * e.g. (73184792) => 8
 * @param {number} n 
 * @returns {number}
 */
const countDigits = (n) => {
  // code here
}

/**
 * 7.
 * Write a function using a loop to return the sum of the digits in a given number
 * e.g. (417) => 12
 * @param {number} n
 * @returns {number} 
 */
const sumOfDigits = (n) => {
  // code here
}

/**
 * 8.
 * Write a function which uses a loop to return the (non-negative) difference between the largest and the smallest element of an array
 * e.g. (6, 10, 3) => 7
 * @param {number[]} arr
 * @returns {number} 
 */
const maxMinDiff = (arr) => {
  //code here
}

/**
 * 9.
 * Write a function which uses nested loops to find the sum of all the elements in a matrix
 * (a matrix is an array of arrays where each subarray has the same length)
 * e.g. ([[1,5], [-2,9]]) => 13
 * @param {number[][]} M
 * @returns {number}
 */
const matrixSum = (M) => {
  // code here
}

/**
 * 10.
 * Write a function which uses loops to return the sum of the first n fibonacci numbers
 * The sequence begins 1, 1, 2, 3, 5, 8, ... the next term is the sum of the previous two terms
 * @param {number} n
 * @returns {number}
 */
const fibonacciSum = (n) => {
  // code here
}

// don't change below!

module.exports = {
  stringRange,
  evenString,
  stringExcept,
  sumUp,
  factorial,
  countDigits,
  sumOfDigits,
  maxMinDiff,
  matrixSum,
  fibonacciSum
}
