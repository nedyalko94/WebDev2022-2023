import Link from 'next/link'

export default function PostList(props) {
  return (
    
    <>
    <h1>List of Post</h1>
    {
        props.posts.map(post=>
            // { return(
            //     <div key={post.id}>
            //     <div>{post.title}</div>
            //     <div>{post.body}</div>
            //     </div>

            // )} is optional but can be done like in react
                <Link href={`/posts/${post.id}`} passHref key={post.id}>
                <div key={post.id}>
                <h2>{post.id}. {post.title}</h2>
                {/* <div>{post.body}</div> */}
                <hr/> 
                </div>
                </Link>
            
        )
    }
    
     
    </>

  )
}

export async function getStaticProps(){
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await response.json()
    return{
        props:{
            // posts:data.slice(0,3)
            posts:data,
        },
        revalidate:10 // (ISR: 10 Seconds) Incremental Static Regeneration
    }
}
