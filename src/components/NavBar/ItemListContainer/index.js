import React from "react";
import Titulo from "../Titulo";
import ItemCount from "../ItemCount/index";


export const ItemListContainer = () => {

    const onAdd = (quantity) => {
        console.log(`Compraste ${quantity} unidades`)

    }
 
 return (
      <>
    <Titulo greeting="Richard-Desafio-numero 3"/>
    <ItemCount initial={1} stock={5} onAdd={onAdd} />  
    </>
  )
}

export default ItemListContainer;

