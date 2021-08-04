import axios from 'axios';
import {shufleArray} from '../servicios/shuffleArray';

export async function getCats (cantidad) {
    let datos = []; 
    for(let i = 1; i<=cantidad; i++){
        let gato = await axios(
            'https://cataas.com/cat?json=true&type=sq',
             )
         //setData([...data, gato.data]);
         datos.push(gato.data , gato.data)
        }
    shufleArray(datos);
    return datos;    
}  

export default getCats;