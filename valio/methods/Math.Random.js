// Math.random() returns a random number between 0 (inclusive),  and 1 (exclusive):

let result
// Returns a random number:
result = Math.random();

// Returns a random integer from 0 to 9:
result = Math.floor(Math.random() * 10);

// Returns a random integer from 0 to 10:
result =Math.floor(Math.random() * 11);

// Returns a random integer from 0 to 99:
result = Math.floor(Math.random() * 100);

// Returns a random integer from 0 to 100:
result = Math.floor(Math.random() * 101);

// Returns a random integer from 1 to 10:
result = Math.floor(Math.random() * 10) + 1;

// Returns a random integer from 1 to 100:
result = Math.floor(Math.random() * 100) + 1;

//random function with 2 number
// function always returns a random number between min (included) and max (excluded):
function getRndIntegerEx(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }
console.log(getRndIntegerEx(5,10))
                
//  function always returns a random number between min and max (both included):

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

  console.log(getRndInteger(5,10))
                        