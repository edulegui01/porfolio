import React, { useState } from 'react'
import '../header/Header.css';


const Header = () => {
    const [menu,setMenu] = useState(false);

    const toggleMenu = () => {
        setMenu(!menu);
    }

    const show = (menu) ? "show" : "";
    
    return (        
        
        <header className="header">
            <nav className="navbar navbar-expand-lg navbar-dark">
                <button className="navbar-toggler"  type="button" onClick={toggleMenu} style={{outline:'none'}} >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={"collapse navbar-collapse " + show} >
                    
                    <a href="#presentation" className="mr-auto nav-link text__degradate text-white pl-0" onClick={toggleMenu}>Eduardo</a>
                    
                    <ul className="navbar-nav">
                        <li>
                            <a href="#about" className="nav-link text-white" onClick={toggleMenu}>Sobre mi</a>
                        </li>
                        <li>
                            <a href="#conocimientos" className="nav-link text-white" onClick={toggleMenu}>Conocimientos</a>
                        </li>
                        {/* <li>
                            <Link href="#" className="nav-link text-white">Porfolio</Link>
                        </li> */}
                        <li>
                            <a href="#contacto" className="nav-link text-white" onClick={toggleMenu}>Contactame</a>
                        </li>
                    </ul>
                </div>

            </nav>
        </header>
      );
}
 
export default Header;