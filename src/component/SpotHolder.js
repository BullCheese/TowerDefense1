import React from "react";
import './SpotHolder.css'

const SpotHolder = (props) => {
    const imageName = props.imageName;
    const size = props.size;
  
    const img_node = require(`./images/${imageName}.png`);
    
    return (
        <div className="spotholder">
            <img className="imagesrc"
            draggable="true" 
            src={img_node}
            style={{width:size, cursor:"grab"}}
            alt={imageName}/>
        </div>
    )

}

export default SpotHolder;

