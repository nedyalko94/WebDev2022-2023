

async function FetchData(){

    try{
        const res = await fetch('https://jsonplaceholder.typicode.com/users/1');
        const data = await res.json();
        // console.log(data)
        return data
        }catch(error){
        // console.log(error);
        return error
        }

}


// FetchData()

// async function FetchData2(){
//     fetch('https://jsonplaceholder.typicode.com/users/1')
//     .then(response => 
//         response.json())
//     .then(data => {
//         //  console.log(data,"fetch 2 ")
//          return data
//     })
//     // .catch(err => {
//     //     // console.log(err)
//     //     return err
//     // })
// }


// FetchData2()



module.exports = {FetchData}