import { useEffect, useState } from 'react';
import {getCats} from '../servicios/getCats';

//componentes
import Loading  from './Loading';
import Card from './Card';
import  Nav  from './Nav';

//style 
import { Game } from '../styles/tablero';

const Tablero = ({modo , normal}) =>{
    const [error, setError] = useState(null);
    const [isloaded, setIsloaded] = useState(false);
    const [data, setData] = useState({gatos : []});
    const [primerMovimiento , setPrimerMovimiento] = useState(false);
    const [movimientos , setMovimientos] = useState(0);
    const [totalCartas , setTotalCartas] = useState([]);
    const [final , setFinal] = useState(false);

    const [primeraCarta, setPrimeraCarta] = useState({});
    const [segundaCarta, setSegundaCarta] = useState({});

    const [desabilitarPar , setDesabilitarPar] = useState([]);
    const [voltearPar , setVoltearPar] = useState([]);   



    useEffect( () => {              
        getDatos();
      },[]);

      useEffect( () => {
        cartasMatch();
      },[segundaCarta])

      useEffect( () => {
        verificarPrimermovimiento();
      },[primeraCarta]);

      useEffect( () => {
        verificarUltimoMovimiento();
      }, [totalCartas]);
    
    const  getDatos = async () => {
        newGame();
        await getCats(modo)
        .then(
            (result) => {
                setIsloaded(true);
                setData({...data, gatos: result});
            },
            (error) => {
                setIsloaded(true);
                setError(error)
            }
        )  
    } 
    const verificarPrimermovimiento = () => {
        if(primeraCarta.id && !primerMovimiento) {
            setPrimerMovimiento(true);
        }  
    }
    const verificarUltimoMovimiento = () => {
        if(totalCartas.length === modo) {
            setFinal(true);
            //console.log('detener cronometro');
        }

    }
    const permitirVuelta = (index,id ) => {
        if(primeraCarta.index === index && primeraCarta.id === id){
            return 0;
        }
        if (!primeraCarta.id) {
            setPrimeraCarta({index , id});
       
        }
        else if (!segundaCarta.id) {
            setSegundaCarta({index , id});
        }
        return 1;
    }

    const cartasMatch =() => {
        if(primeraCarta.id && segundaCarta.id) {
            setMovimientos(movimientos+1);
            const igualdad = primeraCarta.id === segundaCarta.id
            if(igualdad) {
                desabilitarCartas();
            }
            else {
                voltearCartas();
            }
        }
    }

    const desabilitarCartas = () => {
        setDesabilitarPar([primeraCarta.index, segundaCarta.index]);
        setTotalCartas([...totalCartas, primeraCarta.index]);
        resetCards();
    }
    const voltearCartas = () => {   
        setVoltearPar([primeraCarta.index, segundaCarta.index]);
        resetCards();
    }
    const resetCards = () => {
        setSegundaCarta({});
        setPrimeraCarta({});
    }
    const newGame = () => {
        setError(null);
        setIsloaded(false);
        setData({gatos : []});
        setPrimerMovimiento(false);
        setMovimientos(0);
        setTotalCartas([]);
        setFinal(false);
    
        setPrimeraCarta({});
        setSegundaCarta({});
    
        setDesabilitarPar([]);
        setVoltearPar([]);   
    }
if(error) {
    return <div> Error : {error.message}</div>
} else if (!isloaded) {
    return <Loading />
} else {
    return(
        <div> 
            <Game modoJuego = {normal}>
                {data.gatos.map( (gato , index) => (
                    <div  key = {index} >
                        <Card
                            carta = {gato}  
                            permitirVuelta={permitirVuelta}
                            index = {index}
                            desabilitarPar = {desabilitarPar}
                            voltearPar = {voltearPar}
                            >        
                        </Card>
                    </div>
                ))}
                <Nav
                movimientos = {movimientos}
                iniciar = {primerMovimiento}
                parar = {final}
                reiniciar = {getDatos}
                >

                </Nav>
            </Game>
        </div>
        
    )
    }
}

export default Tablero;