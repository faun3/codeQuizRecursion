const seven = totalIntegers([[[5], 3], 0, 2, ["foo"], [], [4, [5, 6]]]); // 7

function totalIntegers(array) {
  let count = 0;
  if (array.length === 0) return 0;
  let firstEl = array.shift();
  if (Array.isArray(firstEl)) {
    count += totalIntegers(firstEl);
  } else {
    if (Number.isInteger(firstEl)) count++;
  }
  return count + totalIntegers(array);
}

console.log(seven);
