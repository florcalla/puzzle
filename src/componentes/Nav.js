import { useState , useRef, useEffect} from "react";
import '../styles/style.css'
const Nav = ({movimientos , iniciar , parar , reiniciar}) => {
    const [timer, setTimer] = useState(0);
    const countRef = useRef(null)

    useEffect(() => {
        if(iniciar) {
            iniciarTiempo();
        }
    },[iniciar]);

    useEffect(() => {
        if(parar) {
            pausar();
        }
    },[parar]);

    const iniciarTiempo = () => {
       countRef.current = setInterval(() => {
           setTimer((timer) => timer +1 )
       }, 1000)     
    }
    const pausar = () => {
        clearInterval(countRef.current)
    }

    const nuevoJuego = () => {
        reiniciar();
    }
    return(
        <div className="nav"> 
            <section> 
               Movimientos :  {movimientos}
            </section>
            <section>
                Tiempo : {timer} s
            </section>
            <button className="newgame" onClick ={nuevoJuego}> 
                Otro Juego
            </button>
            
        </div>
    )
}

export default Nav;