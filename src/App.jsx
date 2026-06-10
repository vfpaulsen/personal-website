import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/react'
import Footer from './components/Footer.jsx'
import Navbar from './components/Navbar.jsx'
import Applications from './pages/Applications.jsx'
import Home from './pages/Home.jsx'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/applications" element={<Applications />} />
        </Routes>
      </main>
      <Footer />
      <Analytics />
      <SpeedInsights />
    </BrowserRouter>
  )
}

export default App
