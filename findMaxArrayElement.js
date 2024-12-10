let numbers = [1, 2, 7, 1, 4, 3];

let max = numbers[0];

for (let i = 0; i < numbers.length; i++) {
  let number = numbers[i];

  if (number > max) {
    max = number;
  }
}

console.log(`The max of ${numbers} is ${max}`);
