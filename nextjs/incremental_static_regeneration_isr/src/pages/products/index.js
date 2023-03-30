
export default function ProductList({products}) {
  return (
    <>
    <h1>List of products</h1>
    {
        products.map(product=>
        <div key={product.id}>
            <h2>
                {product.id}. {product.title} {product.price}
            </h2>
            <hr/>
        </div>
        )
    }
    </>
  )
}

export async function getStaticProps(){
   const response = await fetch('http://localhost:4000/products')
   const data = await response.json()

   return{
    props:{
        products:data
    },
    revalidate:10 // (ISR: 10 Seconds) Incremental Static Regeneration 
//  isr is require for every static props

   }
}
