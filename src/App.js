import './App.css';
import React, {} from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";


//COMPONENTES
import Modo from './componentes/Modo';
import Juego from './componentes/Juego';

function App() {

  return (
    <Router basename={process.env.PUBLIC_URL} > 
    <div className="inicio"> 
      <Route  path ="/"   exact component = {Modo}/>
      <Route  path="/normal"  component = {Juego}/>
      <Route  path="/dificil"  component = {Juego}/>
    </div>
  </Router>
  );

}

export default App;
