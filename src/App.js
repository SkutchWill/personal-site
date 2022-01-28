import './App.css';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

function App() {
  return (
    <div className="App">
      <h1>App component</h1>
      <Navbar/>
      <Outlet/>
    </div>
  );
}

export default App;
