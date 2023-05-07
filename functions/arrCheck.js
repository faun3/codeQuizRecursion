//check if all values in the provided array return true after being tested with the callback

function all(array, callback) {
  if (array.length === 0) return true;
  else {
    let firstEl = array.shift();
    if (callback(firstEl) === false) return false;
    else return all(array, callback);
  }
}

array = [8, 8, 9];

function overSeven(number) {
  if (number > 7) return true;
  else return false;
}

console.log(all(array, overSeven));
