import { useRouter } from "next/router"

export default function Post({ post }) {
const router = useRouter()

// need it with fallback true for backup 
if(router.isFallback){
    return <h1> Loading ...</h1>
}
    return (
        <>
            <h2>{post.id}. {post.title}</h2>
            <p>{post.body}</p>

        </>
    )
}





export async function getStaticPaths(){
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await response.json()


    // dynamic paths

    const paths = data.map(post =>{
        return {
            params:{
                postId:`${post.id}`
            }
        }
    })
    //  the entire idea of  fetch + map is to make dynamic paths


    return {
        // paths:[
            //  in index we have slice the data in getStaticProps to be 3 post so we are making 3 possible paths
            //  but hard coded is not good solution
        //     {
        //         params:{postId:'1'}
        //     },
        //     {
        //         params:{postId:'2'}
        //     },
        //     {
        //         params:{postId:'3'}
        //     }
        // ],
        paths:paths,
        fallback:true  
        // true -
        /*
         with fallback 1-3  will work fine with hardcode version 
         on number 4 will get loading 
          if(router.isFallback){
             return <h1> Loading ...</h1>
             fallback page - to normal page 
             and the page will be static generated and next time will be generated as normal because is already generated in 
             next/server/pages 

}



        */
        // false  - return only the path that are specify if there is no path page will be 404
        //'blocking'
        /*
        with blocking no fallback is require act similar to true  
        */

        // recommended is true 
    }
}

export async function getStaticProps(context) {
    const { params } = context
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`) // with a variable path we need to specify  getStaticPaths
    const data = await response.json()

    //  if the data don't exist  404 page with the object notFound:true  
    if(!data.id){
        return{
            notFound:true
        }
    }

    return {
        props: {
            post: data
        }
    }
}
