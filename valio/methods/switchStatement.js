// switch(expression) {
//     case x:
//       // code block
//       break;
//     case y:
//       // code block
//       break;
//     default:
//       // code block
//   }

// getDay is taking the day from 0 Sunday to 6 Saturday
// switch is checking the case and return the message
// if switch find match Break stop  the check
let day;
switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
  default:
    "Something went wrong";
}

console.log(day);

let result;
let x = 0;
switch (x) {
    // checking variable of X  // case can be single 
  case 0:
     // case can be single variable like number or string ... 

    result = "Off";
    break;
  case 1:
    result = "On";
    break;
  default:
    result = "No value found";
}
console.log(result);

let myNumber = 5;
let numComparison;
switch (myNumber) {
    case 10:
        numComparison =  "is greater";
    break;
    case 5:
        numComparison = "is equal";
    break;
    case 2:
        numComparison =  "is smaller";
    break;
    default: numComparison="something went wrong"
}

console.log(numComparison)

// switch is checking for a exact case  

// case 5:   do something
// you can't compare 2 value that is not equal  like case  myNumber > 5

let myColor = "orange"


switch (myColor){
    case "green":
        console.log("this is green")
        break
    case "orange":
       color= console.log("this is orange")
        break
    case "black":
        console.log("this is black")
        break
    case "red":
        console.log("this is red")
        break
        default:
            console.log("this is another color")
}