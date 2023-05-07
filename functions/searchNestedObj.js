const nestedObject = {
  data: {
    info: {
      stuff: {
        thing: {
          moreStuff: {
            magicNumber: 44,
            something: "foo2",
          },
        },
      },
    },
  },
};

let hasIt = searchNestedPropertyValue(nestedObject, 44); // true
let doesntHaveIt = searchNestedPropertyValue(nestedObject, "foo"); // false

function searchNestedPropertyValue(object, value) {
  for (let key in object) {
    if (
      //this checks if object[key] is an object
      //    excludes functions, arrays and null
      typeof object[key] === "object" &&
      !Array.isArray(object) &&
      object[key] !== null
    )
      return searchNestedPropertyValue(object[key], value);
    else {
      if (
        //Object.values(object) gets an array of the object's values that are
        //  associated with its keys
        //
        //we use find on that array with a function that checks if the element
        //  is equal to the provided value
        //      find returns undefined if no such element is found
        Object.values(object).find((element) => element === value) !== undefined
      )
        return true;
      else return false;
    }
  }
}

console.log(hasIt);
console.log(doesntHaveIt);
