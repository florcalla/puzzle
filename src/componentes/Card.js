
import React, { useEffect, useState } from 'react';

function Cub({ carta , permitirVuelta , index , desabilitarPar , voltearPar}) {
    
    const url = carta.url;
    const [flip, setFlip] = useState(false);
    const [desabilitar , setDesabilitar] = useState(true);

    useEffect(() => {
      if(voltearPar.includes(index)){
        setTimeout( () => setFlip(false), 750);
      }
    },[voltearPar]);

    useEffect(() => {
      if(desabilitarPar.includes(index)){
        setDesabilitar(false);
      }
    },[desabilitarPar]);
    

    const flipCard = () => {    
      const valor = permitirVuelta(index, carta.id)
      if(valor === 1) {
        setFlip(!flip)
      }
    }
    return (
      <div
        className= {`card ${flip ? 'flip' : ''}`} 
        onClick={ desabilitar ? flipCard : null}>
         <div className = "front">
         </div>
         <div className ="back">
          <img src = {`https://cataas.com${url}`} alt ="idol" />
         </div> 
      </div>
      
    )
  }

export default Cub;