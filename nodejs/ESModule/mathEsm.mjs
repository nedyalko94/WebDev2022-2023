


const add = (a,b)=>{
    return a+b
}

const subtract = (a,b)=>{
    return a-b
}


// first pattern

// export default add;


//second pattern or  directly


// export default (a,b)=>{
//     return a+b
// }


//third pattern multiple export
export default {add,subtract}

// just export

export const multiple = (a,b)=>{
    return  a*b
}