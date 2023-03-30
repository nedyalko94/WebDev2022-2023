let getUsers = new Promise ((resolve,reject)=> {
    let a= 5
    if(a<5)
    resolve('this is my resolve')
    else {
        reject( 'my reject')
    }
})
.then((resolve)=> console.log('hi '+ resolve))
.catch(()=> console.log('total fail'))


student=[{
    name:"ivan",
    username:'ivanushka',
    age: 30 , 
    score: 10,
},
{
    name:'galya',
    username: ' galina',
    age: 20 ,
    score: 100
}]





async function letUser(arr){
    await arr
}

function filterMyArr (){
 let nameOfStudent =student.map( (arr)=> arr.name )
 return nameOfStudent
}

letUser(student)
 .then(()=>filterMyArr(data))