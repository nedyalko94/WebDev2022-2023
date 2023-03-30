### Next build , start and export 

next build -build the app for production in the .next folder

next start - starts a Node.js server that supports hybrid pages, serving both statically  generated and ssr rendered pages 

next export - export all your pages to static html files that you can serve without the need of a Node server 

Host your app on any static hosting service or a cdn without having to maintain a server 

    Cannot use ISR or SSR  or Dynamic Path with fallback:true

Client side data fetching for dynamic content 
Landing pages, Blogs and any app where the content is generated at build time 

            in package.json
            "export":" next build && next export"
