
const sum = require('./sum')


test('properly add two number ', ()=>{
    // how normally will we test 
    // if (sum(1,2) === 3) {
    //     console.log("work")
    // }else{
    //     console.log("not work")
    // }
// with jest 
    expect(sum(1,2)).toBe(3)
})
