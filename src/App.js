import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import BuyPage from './pages/Buy Page/BuyPage'
import Home from './pages/Home/Home'
import SellPage from './pages/Sell Page/SellPage'

const App = () => {
  return (
   <>
    <Routes>
     <Route path="/" element={<Home />} />
     <Route path="/rent" element={<Home />} />
     <Route path="/buy" element={<BuyPage />} />
     <Route path="/sell" element={<SellPage />} />
     </Routes>
   </>
  )
}

export default App