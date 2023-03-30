import Head from 'next/head'



export default function index({title,description}) {
    return (
      <div>
          <Head>
          <title> {title} </title>
          <meta name='custom head ' content={description}/>
         
          </Head>
  
  
          <h1 className='content'> Dynamic Head </h1>
      </div>
    )
  }
  
  
  export async function getServerSideProps(){
   
  
      return{
          props:{
              title:`Article Title index`,
              description:`Article Description index`
          }
      }   
  }  