import { useRouter } from "next/router"


export default function ProductDetail() {

  const router = useRouter()
 const productId= router.query.productId

//  productId is equal to the name of the file 

  return (
    <h1>Detail for the product {productId}</h1>
  )
}
