### Pre-rendering & Data Fetching Summary

Pre-rendering refers to the process of generating HTML in advance which results in better performance and SEO.

Next JS supports two forms of pre-rendering 
 * Static Generation
 * Server-side Rendering

Static generation 

    A method of pre-rendering where the HTML are generated at build time 
    Pages can be build once , caching by a CDN and served to clients almost instantly 
    Example Marketing or blogging site 
    For a normal , page use getStaticProps function to fetch the data ahead of time 
    For a dynamic page , you also need the getStaticPaths function
        Fallback:false|true|"blocking"
    Pages cannot be updated without a full re-build
    Incremental Static Regeneration (ISR)

Server-side Rendering(SSR)

    Fetch data at request time 
    Personalize data on user information in the incoming request
    Example : News listing page
    getServerSideProps function helps with client-side data fetching
    Shallow-routing - Routing without calling getStaticProps/getServerSideProps.
    



 