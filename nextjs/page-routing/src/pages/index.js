import Link from 'next/link'
import { useRouter } from 'next/router'


function Home (){

    const router = useRouter()

   const handleClick = ()=>{
    console.log("placing order")

    router.push('/product')
    //  router.replace('/')
   }


   const handleClick2 = ()=>{
    console.log("placing order")

     router.replace('/cars')
    //   navigate you but you can't go back
   }

    return(
        <>
        <h1>
            Home Page
        </h1>

        <h1>Menu</h1>
        <ul>
            <li> <Link href='/blog'>blog</Link></li>
            <li> <Link href='/cars'>cars</Link></li>
            <li> <Link href='/product'>product</Link></li>
            <li> <Link href='/docs'>docs</Link></li>
        
        </ul>

        <button onClick={handleClick}> Place Order / Navigation</button><br></br>
        <button onClick={handleClick2}> router.replace with /cars</button>

       
        </>
    )

}

export default Home