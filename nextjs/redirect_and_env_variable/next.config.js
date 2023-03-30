/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // redirect pages 
  redirects:async()=>{
    return[
      {
        source:"/about", // which path 
        destination:"/", // to where
        permanent:true, // and if is permanent
      },
      {
        source:"/old-blog/:id",
        destination:"/new-blog/:id",
        permanent:false
      }
    ]
  }
}

module.exports = nextConfig
