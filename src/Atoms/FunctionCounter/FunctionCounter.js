import './FunctionCounter.css'
import { useState } from "react";
import Userlogin from '../Userlogin/Userlogin';

function FunctionCounter({ initial, stock, onAdd }) {

    const [count, setCount] = useState(initial);

    const increment = () => {
        setCount(count < stock ? count + 1 : stock);
    };
    const decrement = () => {
        setCount(count >= 1 ? count - 1 : 0);
    };
    // const onAdd = (quantity) =>{
    //     console.log(quantity)
    // }

    return (
        <div className="counter-item">
            <div className='counterContainer'>
                <button className="button-32" onClick={decrement}>-</button>
                <p className="valueCounter">{count}</p>
                <button className="button-32" onClick={increment}>+</button>
            </div>
            <div className='addCart'>
                <Userlogin cta ="Agregar al carrito" onClick={() => onAdd(count)}/>
            </div>
        </div>

    );

}
    export default FunctionCounter;