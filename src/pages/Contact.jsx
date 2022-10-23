import React from 'react';
import './Contact.css';
import { FaLinkedinIn } from "react-icons/fa"




const Contact = () => {
    return (
        <div className="contact__container" id="contacto">
            <div style={{width:'70%'}}>
                <h1>Contactame</h1>
                <h5 style={{textAlign:'center'}}>Si tienes una oferta de trabajo, una propuesta de proyecto o estas interesado en trabajar juntos
                    contactame por aquí
                </h5>
                <div className="contact_links_container" >
                    <a href="mailto:edulegui01@gmail.com"  rel="noreferrer" className="contact_item" style={{textDecoration:'none',backgroundColor:'firebrick',fontSize:'13px',textAlign:'center'}} target="_blank"><i className="far fa-envelope  item_icon"></i>Mandame un mail</a>
                    <a href="https://github.com/edulegui01" rel="noreferrer" className="contact_item bg-dark" style={{textDecoration:'none'}} target="_blank"><i className="fab fa-github item_icon"></i>Sigueme</a>
                    <a href="https://www.linkedin.com/in/santiago-eduardo-leguizamón-45ab14252" rel="noreferrer" className="contact_item" target="_blank" style={{textDecoration:'none',backgroundColor:'#0e76a8',color:'#fff'}}> <FaLinkedinIn size="1.7em" color='#fff'/>Sigueme</a>
                    <a href="https://api.whatsapp.com/send?phone=595986836679" rel="noreferrer" target="_blank" className="contact_item " style={{textDecoration:'none',backgroundColor:'#25d366'}}> <i className="fab fa-whatsapp item_icon"></i>Ecribeme</a>
                </div>
            </div>
        </div>
      );
}
 
export default Contact;