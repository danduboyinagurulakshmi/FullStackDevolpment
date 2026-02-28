import { Routes, Route } from 'react-router-dom'
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import Service from './pages/Service'
import Contact from "./pages/Contact"

const App: React.FC = () => {
  return (
    <>  
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/Service' element={<Service/>}/>

        <Route path="/Contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
