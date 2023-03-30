const add = (a,b)=>{
    return a+b
}

const subtract = (a,b)=>{
    return a-b
}
// first pattern

// module.exports = add




// second pattern
// module.exports = (a,b)=>{
//     return a+b
// }

// third pattern

module.exports = {add,subtract}


//four pattern 
module.exports.multiply = (a,b)=>{
    return a*b
}

// fifth pattern \ using just exports not a good practice

exports.divide = (a,b)=>{
    return a/b

}