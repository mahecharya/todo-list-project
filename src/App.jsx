import React from 'react'
import Header from './component/Header'
import Footer from './component/Footer'
import Homepage from './pages/Homepage'

import Completedtask from './pages/Completedtask'
import Pendingtask from './pages/Pendingtask'
import { Route, Routes } from 'react-router-dom'
import Alltask from './pages/Alltask'

const App = () => {
  return (
    <div className='bg-slate-700 text-white '>
      <Header/>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/complete" element={<Completedtask />} />
        <Route path="/all" element={<Alltask />} />
        <Route path="/all/:id" element={<Homepage />} />
        <Route path="/pending" element={<Pendingtask />} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
