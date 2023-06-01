
const cloneArray = require ('./cloneArray')

test(" properly clone array description",()=>{
    const array = [1,2,3]
    // expect(cloneArray(array)).toBe(array) // will give us error because the array are equal but not the same 
    expect(cloneArray(array)).toEqual(array) // 
    expect(cloneArray(array)).not.toBe(array) // we are checking if they're not the same array
})