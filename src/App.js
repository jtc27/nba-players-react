import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

import Navbar from "./components/layout/Navbar";

import Home from './pages/Home';
import About from './pages/About';

import {NbaProvider} from './context/nba/NbaContext'

function App() {
  return (
    <>
    <NbaProvider>
    <Router>
    <div className='flex flex-col justify-between h-screen bg-white text-white'>
    <Navbar/>

    <main className='flex flex-col mx-auto px-3 pb-12 bg-white-600'>
    <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
    </Routes>
    </main>
    </div>

    </Router>
    </NbaProvider>
    
    </>
  )
}

export default App;