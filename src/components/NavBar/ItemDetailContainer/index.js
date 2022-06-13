import React, {useEffect, useState} from "react";
import ItemDetail from "../ItemDetail";

const catalogo = {
      id:1, image:"https://static.zara.net/photos///2022/W/0/2/p/0604/390/700/2/w/297/0604390700_6_1_1.jpg?ts=1652873996736", nombre:"Abrigo"
    };

export const ItemDetailContainer = () => {
   const [data, setData] = useState({});
  
   useEffect(() => {
      const getData = new Promise(resolve =>{
          setTimeout(() => {
            resolve(catalogo)    
          }, 2000);
      });
       getData.then(res => setData(res));
   }, []);

    return(
     <ItemDetail data={data}/>
    );
}

export default ItemDetailContainer;