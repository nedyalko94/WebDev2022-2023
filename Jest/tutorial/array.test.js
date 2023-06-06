const ArrayFunc = require('./array')


//array

test("testing array",()=>{
    expect(ArrayFunc(["admin","User","guest"])).toContain('admin')
})