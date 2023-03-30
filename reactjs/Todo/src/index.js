import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes,Route} from 'react-router-dom'
import Layout from './Layout/layout.js'
import About from './About';
import './style.css'
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    
    <Layout  >
      
    <Routes>
       <Route path='/' element={<App  />}  />
      <Route path='/About' element={<About/>} />
      
    </Routes>
    </Layout>
  </React.StrictMode>
);

