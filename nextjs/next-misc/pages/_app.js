import '@/styles/globals.css' 
import Header from '@/layout/Header' // footer check the jsconfig.json file for the path
/*
we can make custom  path for import a different module
      "@/layout/*":["components/layout/*"]
      what the path will look like : and what are actual path 
*/
import Footer from '@/layout/Footer' // header
import '@/styles/layout.css' // layout style
import Head from 'next/head'


export default function App({ Component, pageProps }) {

  // for custom layout 
  if (Component.getLayout) {
    return Component.getLayout(<Component {...pageProps} />)
  }

  return (
    //  simple wrap the component with header / footer 
    // and import the css + elements
    <>
     <Head>
        <title> Global Head title </title>
        <meta name='global head ' content='how to set up custom head  tags title meta tags .....'/>
    </Head>

      <Header />
      <Component {...pageProps} /> 
      <Footer /> 

    </>

  )

}
