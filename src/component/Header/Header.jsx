import { NavLink } from "react-router-dom"
import "./Header.css"

const Header = () => {
  return (
    <header>
        <nav>
            <NavLink to="/" end>Home</NavLink>
    
            <NavLink to="/project">About the project</NavLink>
        
        
            <NavLink to="/about">About me</NavLink>

        </nav>
    
    
   </header>
    
  )
}

export default Header