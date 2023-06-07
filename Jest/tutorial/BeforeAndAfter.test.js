
const {startServer, stopServer,sum,subtract} = require('./BeforeAndAfter')

// before or after each 

// beforeEach(()=>startServer())
// afterEach(()=>stopServer())

//once at begin and once at end 

beforeAll(()=>startServer())
afterAll(()=>stopServer())

// with target  inside describe

const nameCheck = ()=>{
    console.log("checking name")
}

describe("checking name",()=>{
    //we run before every test in describe( only inside)  nameCheck
    beforeEach(()=>nameCheck())
    test("user is jeff",()=>{
        const user = "jeff"
        expect(user).toBe("jeff")
    })
    test("user is Karen",()=>{
        const user = "Karen"
        expect(user).toBe("Karen")
    })
})


test("add 2 number",()=>{
    expect(sum(5,10)).toBe(15)
})

test("subtract 2 number",()=>{
    expect(subtract(50,10)).toBe(40)
})



