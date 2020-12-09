import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import Portafolio from './components/Porfolio';
import Knowledge from './pages/Knowledge'
import Contact from './pages/Contact';
import About from './pages/About';

const Routes = () => {
    return (
       <Router>
           <Switch>
               <Route path="/" exact>
                    <Portafolio></Portafolio>
               </Route>
               <Route path="/conocimientos" exact>
                    <Knowledge></Knowledge>
               </Route>
               <Route path="/contacto" exact>
                    <Contact></Contact>
               </Route>
               <Route path="/about" exact>
                    <About></About>
               </Route>
           </Switch>
       </Router>
      );
}
 
export default Routes;
  