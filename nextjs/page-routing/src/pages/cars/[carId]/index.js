import { useRouter } from "next/router"


export default function CarDetail() {

  const router = useRouter()
 const carId= router.query.carId

//  productId is equal to the name of the file 

  return (
    <h1>Detail for the car : {carId}</h1>
  )
}