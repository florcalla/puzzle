
//componente
import {withRouter} from 'react-router'

import Tablero from './Tablero';
import '../styles/style.css'

const Game = (props) => {
  const modo = props.rows;
  const normal = props.isnormal;
    return(
      <div className ="tablero" >
        <Tablero modo = {modo} normal = {normal} /> 
      </div>
        
    );
  
}

export default withRouter(Game);