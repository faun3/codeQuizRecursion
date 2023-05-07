const l1 = [1, 2, 3];
const l2 = [[1, 2], 3];
const l3 = [[[[[[[[[1]]]]]]]]];
const l4 = [10, [[10], 10], [10]];

function sumSquares(array) {
  let sum = 0;
  if (array.lenght === 0) return 0;
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      sum += sumSquares(array[i]);
    } else {
      sum += array[i] * array[i];
    }
  }
  return sum;
}

console.log(sumSquares(l1));
console.log(sumSquares(l2));
console.log(sumSquares(l3));
console.log(sumSquares(l4));
