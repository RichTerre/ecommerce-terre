import "./itemCount.css";
import React,{useState, useEffect} from "react";

export const ItemCount = ({initial, stock, onAdd}) => {
    const [count, setCount] = useState(parseInt(initial));

    const deCrase = () => {
        setCount(count - 1);
    }
    const inCrase = () => {
        setCount(count + 1);
    }
    useEffect(() => {

        setCount(parseInt(initial));
    }, [initial])

  return(
    <div className="counter">
        <button disabled={count <= 1} onClick={deCrase} >-</button>
        <span>{count}</span>
        <button disabled={count >= stock} onClick={inCrase} >+</button>
        <div>
            <button disabled={stock <=0} onClick={() => onAdd(count)} >Agregar al carrito</button>
        </div>
    </div>

  );

}

export default ItemCount;