const Numbers = require("./numbers");

test('test number 3 is greater than number 2',()=>{
    expect(Numbers(3)).toBeGreaterThan(2)
})

test ('number 5 is greater or equal to 3,5',()=>{
    expect(Numbers(5)).toBeGreaterThanOrEqual(3.5)
})

test("number is close to ",()=>{
    expect(Numbers(5)).toBeCloseTo(5)
})

// expect(value).toBeGreaterThan(3);
// expect(value).toBeGreaterThanOrEqual(3.5);
// expect(value).toBeLessThan(5);
// expect(value).toBeLessThanOrEqual(4.5);
// expect(value).toBeCloseTo(0.3);  // Expected difference: < 0.005
