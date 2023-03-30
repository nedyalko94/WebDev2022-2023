

export default function ArticleListByCategory({articles,category}) {

  return (
    <>
    <h1>Show News for category <i>{category}</i></h1>

    {
        articles.map(article=>
            <div key={article.id}>
                <h2>{article.id}. {article.title}</h2>
                <p>{article.description}</p>
                <hr/>
            </div>
        )
    }
    </>
  )
}


export async function getServerSideProps(context){
    const { params,req,res,query } = context
    // you have access to request and response like in express js 
    console.log(req.headers.cookie) // access the cookie
    res.setHeader('Set-Cookie',['name=Ned']) // set the cookie
    console.log(query)// give us access to the query
    const { category }= params
    const response = await fetch(`http://localhost:4000/news?category=${category}`)// next js allow us to use a query
    const data = await response.json()
    console.log(`pre-rendering news articles for category ${category}`)

    return{
        props:{
            articles:data,
            category,
        }
    }

}