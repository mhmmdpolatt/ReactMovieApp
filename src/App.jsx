import { useState } from 'react'
import { BrowserRouter, Routes, Router, Route } from "react-router-dom";

import './App.css'
import WatchList from './components/WatchList';
import Navbar from './components/Navbar';
import Watched from './components/Watched';
import Add from './components/Add';
import Home from './components/home';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
        <Navbar />
        <Routes>
        <Route path='/' element={<Home />} />
          <Route path='/watch' element={<WatchList />} />
          <Route path='/watched' element={<Watched />} />
          <Route path='/add' element={<Add />} />
        </Routes>
      


    </>
  )
}

export default App
