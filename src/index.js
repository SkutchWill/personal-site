import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './App';
import About from './About';
import Contact from './Contact';
import Portfolio from './Portfolio';
import Resume from './Resume';

ReactDOM.render(
  <React.StrictMode>
  <BrowserRouter>
    <Routes>
      <Route path='/personal-site' element={<App />}>
        <Route path='/personal-site/about' element={<About/>}/>  
        <Route path='/personal-site/contact' element={<Contact/>}/>  
        <Route path='/personal-site/portfolio' element={<Portfolio/>}/>  
        <Route path='/personal-site/resume' element={<Resume/>}/>  
      </Route>
    </Routes>
  </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
