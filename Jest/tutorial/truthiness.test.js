

const {UndefinedFunction, NullFunction} = require("./truthiness")


// test('null', () => {
//     const n = null;
//     expect(n).toBeNull();
//     expect(n).toBeDefined();
//     expect(n).not.toBeUndefined();
//     expect(n).not.toBeTruthy();
//     expect(n).toBeFalsy();
//   });


  test("undefined",()=>{
    const b = undefined
    expect(UndefinedFunction()).toBeUndefined()
  })

  test(" should be null",()=>{
    expect(NullFunction()).toBeNull()
  })