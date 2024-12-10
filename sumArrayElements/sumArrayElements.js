let numbers = [-2, 3, 7, 8, -1, 4, 2];
let sum = 0;

for (let index = 0; index < numbers.length; index++) {
  if (numbers[index] % 2 === 0 && numbers[index] > 0) {
    sum += numbers[index];
  }
}
console.log(sum);
