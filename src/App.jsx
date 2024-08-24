import { Route, Routes } from "react-router-dom"
import { Home } from "./pages/Home"
import { Service } from './pages/Service'
import { Faq } from './pages/Faq'
import { Policy } from './pages/Policy'
import { Sponer } from "./pages/Sponer"
import { Footer } from "./components/Footer"
import { useLocation } from 'react-router-dom';
import ReactGA from 'react-ga';
import { useEffect } from "react"
function App() {
  const location = useLocation();
  useEffect(() => {
    ReactGA.pageview(location.pathname + location.search);
  }, [location]);
  return (
    <main>
      <Routes>
        <Route path="/" element={< Home />} />
        <Route path="/sponser" element={<Sponer />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/service" element={<Service />} />
        <Route path="/policy" element={<Policy />} />
      </Routes>
      <Footer />
    </main>
  )
}

export default App
