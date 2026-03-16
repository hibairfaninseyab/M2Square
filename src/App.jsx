import { useState } from 'react'
import './App.css'
import Footer from './component/Footer/Footer'
import Header from './component/header/header'
import Hero from './component/home/Hero'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header />
    <Hero />
     <Footer />
    </>
  )
}

export default App
