import React from 'react';
import projectUrl from './project'


function App() {
  

   
  
  return (
    <div className=' container'>
   <div className='CarouselContainer'>
   <div className='carousel'>
    <figure>
   {/* {projectUrl !== undefined ? projectUrl.map((url,index)=>
    
    <iframe className={`${"project"+index}`} key={index} src={url} width='400px' height={`400px`}
     title={`project ${index} `}>
    <p>Your browser does not support iframes.</p></iframe>

   ):''}
   {console.log(projectUrl)} */}


<iframe className='project1' key={'project1'} src={"https://endprojectcybertech.netlify.app/"} width='400px' height={`400px`}
     title='project1'>
    <p>Your browser does not support iframes.</p></iframe>
    {/* <iframe className='project2' key={'project2'} src={"https://endprojectcybertech.netlify.app/"} width='400px' height={`400px`}
     title='project2'>
    <p>Your browser does not support iframes.</p></iframe> */}

   </figure>
   </div>
   </div>
   </div>
  );
}

export default App;
