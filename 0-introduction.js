/* 
max-value
Write a function, maxValue, that takes in array of numbers as an argument. 
The function should return the largest number in the array.
Solve this without using any built-in array methods.
You can assume that the array is non-empty.
*/

const maxValue1 = (nums) => {
  let max = nums[0];

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > max) max = nums[i];
  }

  return max;
};

const maxValue2 = (nums) => {
  let max = -Infinity;

  for (let num of nums) {
    if (num > max) max = num;
  }

  return max;
};

//   n = length of array
//   Time: O(n)
//   Space: O(1)

// ----------------------------------------------------------------

/*
isPrime

Write a function, isPrime, that takes in a number as an argument. 
The function should return a boolean indicating whether or not the given number is prime.
A prime number is a number that is only divisible by two distinct numbers: 1 and itself.
For example, 7 is a prime because it is only divisible by 1 and 7. 
For example, 6 is not a prime because it is divisible by 1, 2, 3, and 6.
You can assume that the input number is a positive integer.
*/

const isPrime1 = (n) => {
  if (n < 2) return false;

  for (let i = 2; i < n; i++) {
    if (!(n % i)) return false;
  }

  return true;
};

const isPrime2 = (n) => {
  if (n < 2) return false;

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (!(n % i)) return false;
  }
  return true;
};

// By checking the square root, you're cutting the runtime down significantly if N is a larger number.
// If n = 64 and you check up to the square root,
// you'll be checking up to 8 instead of all the way up to 64.

// n = input number
// Time: O(square_root(n))
// Space: O(1)
