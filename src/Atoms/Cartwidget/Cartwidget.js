import './Cartwidget.css'
import Cart from '../../img/cart.svg'

const Cartwidget = (props) => {
    return (
        <>
        <div className="cart-container">
            <img className= "Cartlogo" src={Cart} alt="logoAbstrategic"></img>
            <p className="bulletCart">{props.number}</p>
        </div></>
    )
    }
    export default Cartwidget;