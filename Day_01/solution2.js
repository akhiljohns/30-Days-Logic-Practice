// Day 1 - Q2: Sum numbers from 1 to N
function sumNumbers(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  console.log("Sum:", sum);
}

sumNumbers(10);
