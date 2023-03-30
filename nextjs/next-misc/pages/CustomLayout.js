import Footer from '@/components/layout/Footer'
import React from 'react'

export default function CustomLayout() {
  return (
    <h1 className='content'>custom-layout no header</h1>
  )
}
// function for custom layout check _app.js for more detail
CustomLayout.getLayout = function PageLayout(page){
  return(
    <>
    {page}
    <Footer/>
    </>
  )

}