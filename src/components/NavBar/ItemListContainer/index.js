import React,{useState, useEffect} from "react";
import Titulo from "../Titulo";
import ItemCount from "../ItemCount/index";
import ItemList from "../ItemList";

const catalogo = [
  {
    id:1, image:"https://static.zara.net/photos///2022/W/0/2/p/0604/390/700/2/w/297/0604390700_6_1_1.jpg?ts=1652873996736", nombre:"Abrigo", 
  },
  {
    id:2, image:"https://static.zara.net/photos///2022/W/0/2/p/5976/448/801/2/w/297/5976448801_6_1_1.jpg?ts=1650960966977", nombre:"Abrigo" 
  },
  {
    id:3, image:"https://static.zara.net/photos///2020/S/1/2/p/2262/520/105/2/w/386/2262520105_1_1_1.jpg?ts=1603354136576", nombre:"Zapato" 
  },
  {
    id:4, image:"https://static.zara.net/photos///2022/W/1/2/p/2230/920/010/2/w/386/2230920010_6_2_1.jpg?ts=1643815605159", nombre:"Zapato" 
  },
  {
    id:5, image:"https://static.zara.net/photos///2022/V/0/2/p/0840/450/401/2/w/297/0840450401_6_1_1.jpg?ts=1642524864036", nombre:"Jean" 
  },
  {
    id:6, image:"https://static.zara.net/photos///2022/V/0/2/p/0840/450/802/2/w/297/0840450802_6_1_1.jpg?ts=1638870407168", nombre:"Jean" 
  },
];

export const ItemListContainer = () => {
    const [data, setData] = useState([]);
    
    const onAdd = (quantity) => {
        console.log(`Compraste ${quantity} unidades`)
      }

    useEffect(() => {
      const getData = new Promise(resolve => {
         setTimeout(() => {
           resolve(catalogo);  
         }, 2000)
      });
      getData.then(res => setData(res))
    },[])      

 
 return (
      <>
    <Titulo greeting="Richard-Desafio-numero 3"/>
    <ItemCount initial={1} stock={5} onAdd={onAdd} />  
    <ItemList data={data}/>
    </>
  )
}

export default ItemListContainer;

