import User from '../components/user'


export default function UserList({users}) {
    return (
      <>
          <h1> List of Users</h1>
  {
      users.map(user=>{
          return(
              <div key={user.id}>
                 <User user={user}/>
  
              </div>
          )
      })
  }
      </>
  
    )
  }
  
  
  export async function getStaticProps(){
      //   run only server side never client side 
    //    here can be execute server side code as fs module  db connection .... 
    //  can't be run in components 
    // console log run in terminal log not in browser console.log 
      const response = await fetch('https://jsonplaceholder.typicode.com/users')
      const data = await response.json()
      console.log(data) 
  
      return  {
          props:{
              users:data
          }
      }
  } 