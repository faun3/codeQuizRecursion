arr = [1, 3, 5, 7];
arr2 = [0, 8];
arr3 = [];
arr4 = [2, 8, 10];

function arrProd(array) {
  if (array.length === 0) return 0;
  if (array.length === 1) return array[0];
  else {
    let product = 1;
    let firstEl = array.shift();
    return product * firstEl * arrProd(array);
  }
}

console.log(`array 1 result: ${arrProd(arr)}`);
console.log(`array 2 result: ${arrProd(arr2)}`);
console.log(`array 3 result: ${arrProd(arr3)}`);
console.log(`array 4 result: ${arrProd(arr4)}`);
