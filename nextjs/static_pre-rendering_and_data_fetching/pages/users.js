
export default function UserList({users}) {
  return (
    <>
        <h1> List of Users</h1>
{
    users.map(user=>{
        return(
            <div key={user.id}>
                <ul>
                    <li> Name : {user.name}</li>
                    <li> Email: {user.email}</li>
                </ul>

            </div>
        )
    })
}
    </>

  )
}


export async function getStaticProps(){
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json()
    console.log(data) 
    return  {
        props:{
            users:data
        }
    }
} 