

let p = new Promise((resolve,reject)=>{
    let a = 2
    if (a ==2)
    {resolve('Success')}
    else{
    reject('failed')
    }
})

.then((resolve)=>{console.log('this is then in the case of ' + resolve)})
.catch((reject)=>{console.log('this is catch in case of '+reject)})


// promise.all
const myFirstPromise = new Promise ((resolve,reject)=>{resolve('my first resolve')}) 
const mySecondPromise= new Promise((resolve,reject)=>{resolve('my second resolve')})
const myThirdPromise= new Promise ((S,R)=>{S('my third solution')})

//wait to finish all 
Promise.all([myFirstPromise,mySecondPromise,myThirdPromise])
.then((solution)=>{console.log(solution)})

// show us first that finish and don't display rest // in this case is myFirstPromise 
Promise.race([myFirstPromise,mySecondPromise,myThirdPromise])
.then((solution)=>{console.log(solution)})

