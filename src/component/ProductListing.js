import React from "react";
// import { connect } from "react-redux";
import { QuantityPicker } from 'react-qty-picker';


const Content = () => {

return(
        <div className="product_content">
            
            
            <h3>Glow Saloon</h3>
            <div className="spaceND"></div>
            <div className="card" key={2}>
            <div className="card_img_2">
                <img src="./images/1.jpg" alt="imgdsc"/> 
            </div>
            
            <div className="card_header">
                <h2>Retinol</h2>
                <p>Pigmention and uneven skintone</p>
                <p className="price">123<span>MYR</span></p>
                <QuantityPicker min={0} max={10} value={10}/>
            </div>
        </div>
        </div>
    )
}
export default Content;