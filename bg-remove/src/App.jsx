import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/home'
import Result from './pages/result'
import BuyCredits from './pages/BuyCredits'
import NavBar from './components/NavBar'


const App = () => {
  return (
    <div className='min-h-screen bg-slate-50'>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/result' element={<Result/>} />
        <Route path='/buy' element={<BuyCredits/>} />
      </Routes>
    </div>
  )
}

export default App