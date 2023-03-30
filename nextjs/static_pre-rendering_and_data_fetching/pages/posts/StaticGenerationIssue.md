
data don't get update when the ip update because pages are already generated once
(stale date) old data


ISR 
    Incremental Static Regeneration

    With ISR , Next JS allow you to update static pages after you've build your app 

    You can statically generate individual pages without needing to rebuild the entire site , effectively solving the issue of dealing with stale data 

    How ? 
        in the getStaticProps function , apart from the props key , we can specify a REVALIDATE key the value for revalidate is the number of seconds after which a page re-generation can occur 

