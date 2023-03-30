import { useRouter } from "next/router"


export default function Review() {

    const router = useRouter()
    const {carId,reviewId}= router.query

  return (
    <>
        <h1>Review id : {reviewId}</h1>
        <h1>car id : {carId}</h1>

    </>
  )
}



