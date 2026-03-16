import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Footer from './component/footer/Footer'
import Header from './component/header/Header'
import Hero from './component/home/Hero'
import Home from './component/home/Home'
import TokenizedHomes from './component/tokenized_homes/TokenizedHomes'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<><Header /><Hero /><Footer /></>} />
        <Route path="/home" element={<Home />} />
        <Route path="/tokenized-homes" element={<TokenizedHomes />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
