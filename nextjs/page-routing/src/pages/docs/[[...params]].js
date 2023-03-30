import { useRouter } from "next/router"


function Doc(){
    //  ...params catch all routes /docs/... and make them with the same layout like this file 

    const router = useRouter()
    const {params = []} = router.query
    console.log(params) // params is array ot all query

// for different length of the query different response
//  for 1 length we get  <h1> Viewing docs for feature {params[0]}
// for 2  <h1> Viewing docs for feature {params[0]} and concept {params[1]}
// and for more we get default <h1>Docs Home Page</h1>

//OPTIONAL CATCH UP IF WE WRAP WITH DOUBLE [[]] THE FILE [...params] THAT WILL CATH /docs  OTHERWISE WILL BE 404
    if(params.length == 2){
        return <h1> Viewing docs for feature {params[0]} and concept {params[1]} </h1>
    }else if(params.length === 1){
        return <h1> Viewing docs for feature {params[0]}  </h1>
    }


    return (

        <h1>Docs Home Page</h1>
        

    )

    
}

export default Doc