import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Footer from './component/footer/Footer'
import Header from './component/header/Header'
import Hero from './component/landing/Hero'
import Home from './component/landing/Home'
import TokenizedHomes from './component/tokenized_homes/TokenizedHomes'
import FinancePage from './component/finance/finanace'
import BuySellPage from './component/buysell/BuySell'
import TermsConditions from './component/conditions/terms&conditions'
import PrivacyPolicy from './component/privacy/privacy'
import ContactUs from './component/contactus/contact'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<><Header /><Hero /><Footer /></>} />
        <Route path="/home" element={<Home />} />
        <Route path="/tokenized-homes" element={<TokenizedHomes />} />
        <Route path="/finance" element={<FinancePage />} />
        <Route path="/buy-sell" element={<BuySellPage />} />
        <Route path="/terms-conditions" element={<TermsConditions />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
