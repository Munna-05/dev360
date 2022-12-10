import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar';
import Home from './Pages/Home';

function App() {
  return (
    <div className="App ">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path={'/'} element={<Home/>}/>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
