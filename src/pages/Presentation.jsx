import React from 'react';
import '../pages/Presentation.css';
import perfil3 from '../images/perfil3.jpg'

const Presentation = () => {
    return (  
        <div className="presentation" id="presentation">
            
            <img src={perfil3} alt="" className="imagen"/>
            <div className="bg-red container__text">
                <h1 className="text-white text-center">Hola!</h1>
                <h2 className="text-white text-centter">Soy Eduardo Leguizamón</h2>
                <h5 className="text-white text-center">Programador</h5>
            </div>
            
        </div>
    );
}
 
export default Presentation;