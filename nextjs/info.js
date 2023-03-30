// https://www.youtube.com/watch?v=T63nY70eZF0 17:46


// in every page we can have error page layout head and actual page 

import React from 'react'

export default function error({error,reset}) {
  return (
    <div>
        this ain't loading up :{error.message}
        <button onClick={()=>reset()}>reset</button>
        </div>
  )
}