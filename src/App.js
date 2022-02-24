import './styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import { Routes, Route } from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import Portfolio from './Portfolio';
import Home from './Home';
import Root from './Root';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Root/>}>
          <Route index element={<Home/>}/>
          <Route path='about' element={<About/>}/> 
          <Route path='contact' element={<Contact/>}/> 
          <Route path='portfolio' element={<Portfolio/>}/> 
        </Route>                  
      </Routes>
    </div>
  );
}

export default App;
