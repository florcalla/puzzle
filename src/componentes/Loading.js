import '../styles/style.css'
import loadingIcon  from '../img/loadingp.png'

const Loading = () => {
    return(
        <div className="loading">
            <img className="rotar" src ={loadingIcon} alt=""/>
        </div>
    )
}

export default Loading;
