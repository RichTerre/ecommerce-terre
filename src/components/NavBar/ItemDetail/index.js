import React from "react";
import "./itemDetail.css"

export const ItemDetail = ({data}) => {
    return(
     <div className="container">
         <div className="detail">
             <img className="detail_image" src={data.image} alt="" />
             <div className="content">
                 <h1>{data.nombre}</h1>
             </div>
             <div className="content">
                 <button></button>
             </div>
         </div>
     </div>
    );
}

export default ItemDetail;