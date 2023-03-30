import React from 'react'
import {BrowserRouter} from 'react-router-dom'
import Header from './Header'

export default function layout({children}) {
  return (
    <BrowserRouter>
    <Header/>
    {children}
  </BrowserRouter>  )
}
