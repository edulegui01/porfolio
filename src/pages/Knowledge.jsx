import React from 'react'
import '../pages/Knowledge.css';

const Knowledge = () => {
    return (
        <div className="knowledge__container" id="conocimientos">
            <div style={{width:'70%'}}>
                <h1 >Conocimientos</h1>
                <h5 style={{textAlign:'center'}}>Actualmente manejo estos conocimientos en cuanto al desarrollo web.</h5>
                <div className="tools_container">
                    <div className="items_container"><i className="fab fa-python logo"></i>Python</div>
                    <div className="items_container"><i className="fab fa-js logo"></i>Javascript</div>
                    <div className="items_container"><i className="fab fa-html5 logo"></i>HTML5</div>
                    <div className="items_container"><i className="fab fa-css3-alt logo"></i>CSS</div>
                    <div className="items_container"><i className="fab fa-react logo"></i>React</div>
                    <div className="items_container"><i className="fas fa-database logo"></i>Lenguaje SQL</div>
                    <div className="items_container"><i className="fab fa-bootstrap logo"></i>Bootstrap</div>
                    <div className="items_container"><i className="fab fa-git-alt logo"></i>Git</div>
                </div>
            </div>
        </div>
      );
}
 
export default Knowledge;