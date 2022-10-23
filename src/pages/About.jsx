import React from 'react';
import './About.css';
import fondo from '../images/fondo.jpg';


const About = () => {
    return (
        <div className="container__about" id="about">
           <h1 className="text__degradate__About">Acerca de mí</h1>
            <div className="aboutme_content" >
                <img src={fondo} alt="" className="imagen "/>
                <p>Soy estudiante de la carrera Licienciatura en ciencias informáticas apacionado por la informática,
                 me encanta aprender nuevas tecnologías. </p>
                {/* <a href='https://www.freepik.es/vectores/tecnologia'>Vector de Tecnología creado por pch.vector - www.freepik.es</a> */}
            </div>
        </div>
      );
}
 
export default About;