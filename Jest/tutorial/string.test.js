
const  StringFunc = require('./string')


// regex

test("testing regex",()=>{
    expect(StringFunc("hello")).toMatch(/o/) 
})

test("testing string",()=>{
    expect(StringFunc("hello")).toBe("hello")
})

