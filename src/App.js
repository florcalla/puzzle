import './App.css';
import React, {} from 'react';
import { HashRouter as Router, Route } from "react-router-dom";

//COMPONENTES
import Modo from './componentes/Modo';
import Juego from './componentes/Juego';

function App() {

  return (
    <Router basename={process.env.PUBLIC_URL} > 
    <div className="inicio"> 
      <Route  path ="/"   exact component = {Modo}/>
      <Route  
        path="/normal"  
        render = {(props) =>  (
          <Juego {...props } rows = {8} isnormal = {true}/>
        )}/>
      <Route  
        path="/dificil"  
        render = {(props) =>  (
          <Juego {...props } rows = {18} isnormal = {false}/>
        )}/>
    </div>
  </Router>
  );

}

export default App;
