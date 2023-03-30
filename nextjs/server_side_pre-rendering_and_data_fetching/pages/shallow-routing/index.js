import React,{useState} from 'react'
import { useRouter } from 'next/router'

export default function index({eventList}) {
    const [Events, setEvents] = useState(eventList)
    const router = useRouter()
    const fetchSportsEvents = async()=>{
        const response = await fetch (`http://localhost:4000/events?category=sports`)
        const data = await response.json()
        setEvents(data)
        router.push('/shallow-routing?category=sports',undefined,{shallow:true})


    }

  return (
    <div>
        <button onClick={fetchSportsEvents}>Sports</button>
        <h1> List of events</h1>
        {
            Events.map(event=>
                <div key={event.id}>
                    <h1>{event.id}. {event.title} {event.date} | {event.category}</h1>
                    <p>{event.description}</p>
                <hr/>
                </div>
                )
        }          

    </div>
  )
}



export async function getServerSideProps(context){
    const {query} = context
    const {category} = query
    const queryString = category?"category=sports":''
    const response = await fetch (`http://localhost:4000/events?${queryString}`)
    const data = await response.json()

    return{
        props:{
            eventList:data
        }
    }

}