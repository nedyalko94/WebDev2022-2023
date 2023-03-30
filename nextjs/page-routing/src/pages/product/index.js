import Link from 'next/link'

export default function index({productId =100}) {

  return (
    <>

    <h1><Link href='/'>Home</Link></h1>

    <h1><Link href='/product/1'>product 1</Link></h1>
    <h1><Link href='/product/2'>product 2</Link></h1>
    <h1><Link href='/product/3' replace>product 3</Link></h1> 
    <p> when you use replace  props on a link and when you visit it and you try to go back sends you to the home page </p>
    <h1><Link href={`/product/${productId}`}>product {productId}</Link></h1>
  
    </>
  )
}
 