import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, BrowserRouter as Router, Routes } from'react-router-dom';
import Home from './pages/forms.jsx';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
    <div className='navbar'>
      </div>
  
        <Routes>
          <Route exact path='/home' element={<Home/>}/>
        </Routes>


      </BrowserRouter>
    </div>
  );
}

export default App;
