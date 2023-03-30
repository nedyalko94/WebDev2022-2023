import React from 'react';
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import Contact from './Contact';
import NotFoundPage from './NotFoundPage';
import Blog from './Blog';
import BlogDetails from './BlogDetails';

const TestFunction= ()=>{
  return(
     console.log('hi')
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <h1> this is static</h1>
      <ul>
        <li><a href='/'>home</a></li>
        <li><a href='/contact'> contact</a></li>
        <li><a href='/blog'>Blog</a></li>
        <li><a href='/blog/101'>BlogDetails</a></li>
      </ul>
      <Routes>
        <Route path='/' element={<App users={[1,2,3,4,5]} posts={[{id:1},{id:2}]}/>} />
        <Route path='/contact' element={<Contact  MyFunction={TestFunction}/>} />
        <Route path='/blog' element={< Blog/>} />
        <Route path='/blog/:id' element={< BlogDetails/>} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);


