import './styles/App.css';
import { Routes, Route } from 'react-router-dom';
import bootstrap from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './About';
import Contact from './Contact';
import Portfolio from './Portfolio';
import Resume from './Resume';
import Home from './Home';
import Root from './Root';

function App() {
  return (
    <div className="App container-fluid">
      <Routes>
        <Route path='/' element={<Root/>}>
          <Route index element={<Home/>}/>
          <Route path='about' element={<About/>}/> 
          <Route path='contact' element={<Contact/>}/> 
          <Route path='portfolio' element={<Portfolio/>}/> 
          <Route path='resume' element={<Resume/>}/> 
        </Route>                  
      </Routes>
    </div>
  );
}

export default App;
