const {FetchData} = require('./async')


test("user fetch name should be Leanne Graham",async()=>{
    expect.assertions(1);
    return FetchData().then(data=>{
        expect(data.name).toEqual("Leanne Graham")
    })
})

test("user fetch name should be Leanne Graham",async()=>{
    expect.assertions(1)
    const data =  await FetchData()
        expect(data.name).toEqual("Leanne Graham")
})


