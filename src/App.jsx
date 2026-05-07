import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Sermons from './pages/Sermons'
import Ministries from './pages/Ministries'
import Events from './pages/Events'
import Give from './pages/Give'
import Contact from './pages/Contact'
import Sasaku from './pages/Sasaku'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

/* Pages that use the main church layout */
function ChurchSite() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/"           element={<Home />} />
          <Route path="/about"      element={<About />} />
          <Route path="/sermons"    element={<Sermons />} />
          <Route path="/ministries" element={<Ministries />} />
          <Route path="/events"     element={<Events />} />
          <Route path="/give"       element={<Give />} />
          <Route path="/contact"    element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        {/* SASAKU has its own layout — no main Navbar/Footer */}
        <Route path="/sasaku" element={<Sasaku />} />
        {/* All other pages use the church layout */}
        <Route path="/*" element={<ChurchSite />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
