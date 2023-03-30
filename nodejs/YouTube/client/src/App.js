import { useRef } from 'react';
import './App.css';

function App() {
  const link = useRef('')

  const sendLink = async()=>{
     try{
    const res = await fetch(`http://localhost:8080/DownloadVideo`,{
      method:"post",
      headers: {"Content-Type":"application/json"},
      body:JSON.stringify({
        link:link.current.value

      })

    
    
    });
    const data = await res.json();
    
    }catch(error){
    console.log(error);
    }

  }
  return (
    <div className="App">
      <h1>Download YouTube Video</h1>
      <form>
        <label for="DownloadVideo" > Link of The YouTube Video</label><br></br>
        <input type="text" name="DownloadVideo" id='DownloadVideo' ref={link}></input>
        <button onClick={sendLink}>Download</button> 
      </form>
      
    </div>
  );
}

export default App;
