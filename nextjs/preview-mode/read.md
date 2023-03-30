
### preview mode 

help app that rely on a CMS 

CMS stand for content management system and is a tool that helps users create , manage and modify content on a website without the need for specialized technical knowledge

how preview mode can be used when you do have a CMS 

When to use Preview mode ? 

in the pre-rendering section we understand about static generation where the pages are pre-rendered at build time . it is pretty useful when your pages fetch data from a CMS 

However it's not suitable when you're creating draft in your CMS and want to preview the draft changes immediately on your page.

You want NEXT js to bypass static generation for this scenario.

You deploy your app and then when you make changes in your CMS ,
they won't be reflected as pages are only generated when you build the app.

There was a need to handle this scenario of "Preview of Publish"