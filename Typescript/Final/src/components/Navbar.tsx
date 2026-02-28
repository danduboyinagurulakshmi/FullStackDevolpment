import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <h2>MyApp</h2>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/Service">Services</Link>
        <Link to="/Contact">Contact Us</Link>
      </div>
    </nav>
  )
}

export default Navbar
