import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

import Navbar from "./components/layout/Navbar";

import Home from './pages/Home';
import About from './pages/About';

function App() {
  return (
    <>
    <Router>

    <Navbar/>

    <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
    </Routes>


    </Router>
    
    </>
  )
}

export default App;