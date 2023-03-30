import React from 'react'

import { GetServerSideProps , GetStaticProps, GetStaticPaths } from 'next'

export default function typescriptDataFetching() {
  return (
    <div>typescriptDataFetching</div>
  )
}




// export const getStaticProps:GetStaticProps = async context =>{
//     // ....
// }

// export const getStaticPaths:GetStaticPaths = async ()=>{
// //  ....
// }

// export const getServerSideProps: GetServerSideProps =async context => {
//     // 
    
// }