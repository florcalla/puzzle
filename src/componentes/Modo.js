import { Link } from "react-router-dom";
import '../styles/style.css'
const Modo = () => {
    return(
        <div className="background">
             <div className = "modo">
                 <button className = "botoninicio">
                     <Link to = {{pathname :"/normal" , state : {rows : 8 , normal : true}} } style={{ textDecoration: 'none' ,color: 'inherit' }}  >Normal</Link>
                 </button>
                 <button className = "botoninicio"  >
                    <Link to = {{pathname :"/dificil" , state : {rows : 18 , normal : false }}} style={{ textDecoration: 'none' ,color: 'inherit' }} >Dificil</Link>
                 </button>
             </div>
        </div>
    );
}

export default Modo;