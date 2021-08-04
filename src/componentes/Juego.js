
//componente
import Tablero from './Tablero';
import '../styles/style.css'

const Game = (props) => {
  const modo = props.location.state.rows;
  const normal = props.location.state.normal;

    return(
      <div className ="tablero" >
        <Tablero modo = {modo} normal = {normal} /> 
      </div>
        
    );
  
}

export default Game;