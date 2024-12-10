let fruitsData = [
  ['apple', 'orange', 'cherry'],
  [1.2, 2.0, 3.5],
];

const fruitNames = fruitsData[0];
const fruitWeights = fruitsData[1];

for (let i = 0; i < fruitNames.length; i++) {
  console.log(`${fruitNames[i]} = ${fruitWeights[i]}`);
}
