
const reverseString = require('./algorithm')


test(" test if function exist ", ()=>{
    expect(reverseString).toBeDefined()
})

test("string reverses",()=>{
    
    expect(reverseString("hello")).toEqual("olleh")
})