import { Link } from "react-router-dom";
import '../styles/style.css'
const Modo = () => {
    return(
        <div className="background">
             <div className = "modo">
                 <button className = "botoninicio">
                     <Link to = {{pathname :"/normal" }} style={{ textDecoration: 'none' ,color: 'inherit' }}  >Normal</Link>
                 </button>
                 <button className = "botoninicio"  >
                    <Link to = {{pathname :"/dificil" }} style={{ textDecoration: 'none' ,color: 'inherit' }} >Dificil</Link>
                 </button>
             </div>
        </div>
    );
}

export default Modo;