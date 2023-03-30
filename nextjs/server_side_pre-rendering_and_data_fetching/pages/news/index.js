
export default function NewsArticleList( {articles}) {// can be use props  and then props.article
  return (
    <>
    <h1>List of News Article</h1>
    {
        articles.map( article => 
        <div key={article.id}>
            <h2> {article.id}. {article.title} | {article.category}</h2>


        </div>
        )

    }
    </>
  )
}

// SSR is slower than Static
// getServerSideProps run only on the server
// 1  server side can be written in getServerSideProps
// 2 you don't have to worry about api keys in getServerSideProps as that won't make it to the browser 
// 3  getServerSideProps only in pages not in components
// 4  getServerSideProps should return object with props key which is an object 
/*
example

return{
        props:{
            articles:data
        }
    }

look the function down 
*/
//5  getServerSideProps will run at every request



export async function getServerSideProps(){

    const res = await fetch('http://localhost:4000/news')
    const data = await res.json()
    

    return{
        props:{
            articles:data
        }
    }

}