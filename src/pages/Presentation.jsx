import React from 'react';
import '../pages/Presentation.css';
import perfil4 from '../images/perfil4.jpg'

const Presentation = () => {
    return (  
        <div className="presentation" id="presentation">
            
            <img src={perfil4} alt="" className="imagen"/>
            <div className="bg-red container__text">
                <h1 className="text-white text-center">Hola!</h1>
                <h2 className="text-white text-centter">Soy Eduardo Leguizamón</h2>
                <h5 className="text-white text-center">Informático</h5>
            </div>
            
        </div>
    );
}
 
export default Presentation;