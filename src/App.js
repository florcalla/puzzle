import './App.css';
import React, {} from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";


//COMPONENTES
import Modo from './componentes/Modo';
import Juego from './componentes/Juego';

function App() {

  return (
    <Router> 
    <div className="inicio"> 
      <Route exact path ="/"   component = {Modo}/>
      <Route  path="/normal"  component = {Juego}/>
      <Route  path="/dificil"  component = {Juego}/>
    </div>
  </Router>
  );

}

export default App;
