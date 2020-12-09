import React from 'react';
import '../components/Porfolio.css';
import Presentation from '../pages/Presentation';
import Header from './header/Header';
import About from '../pages/About';
import Knowledge from '../pages/Knowledge';
import Footer from '../pages/Footer';
import Contact from '../pages/Contact';


const Porfolio = () => {
    return (  
        <div className="container_porfolio">
            <Header></Header>
            <Presentation></Presentation>
            <About></About>
            <Knowledge></Knowledge>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
}
 
export default Porfolio;