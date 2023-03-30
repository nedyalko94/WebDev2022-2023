import React from 'react'
export interface Props {
    tittle:string
    color?:string
}

const Header = (props:Props)=>{
    return(
        <header>
            <h1 style={{color:props.color?props.color:"blue"}}>{props.tittle}</h1>
        </header>
    )
}

export default Header