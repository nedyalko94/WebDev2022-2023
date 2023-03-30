import React from 'react'

function Layout({children}) {
  return (
        <>
        <h1>header</h1>
        {children}
        <h1>footer</h1>
        </>
  )
}

export default Layout