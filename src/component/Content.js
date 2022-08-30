import React from "react";
import product_card from "../data/product_data";
// import { Navigate } from "react-router-dom";



const handleClick = function (itemId : number){
        var productList = [];
        var productList2 = [];

        Object.keys(product_card).forEach(function(itemId) {
            productList.push(<option value={itemId}>{product_card[itemId]}</option>);
        });

        productList.forEach((el)=>{
            let prod = el.props.children;
            if(prod.id === itemId){
                productList2.push(prod.id, prod.product_name, prod.description, prod.price, prod.currency, prod.thumb, prod.stock )
            }
        })

        productList2.forEach((data)=>{
            console.log(data)
        })

        

    }

// const Redirect = () => {
//     window.open("./ProductListing.js");
// }





const Content = () => {
    
    console.log(product_card);
    const listItems = product_card.map((item) => 
        <div className="card" key={item.id}>
            <div className="card_img">
                <img src={item.thumb} alt={item.imgdsc}/> 
            </div>
            
            <div className="card_header">
                <h2>{item.product_name}</h2>
                <p>{item.description}</p>
                <p className="price">{item.price}<span>{item.currency}</span></p>
                {/* <a href="./ProductListing" >
                    Link
                </a> */}
                <button onClick = {(e : any) =>
                    [handleClick(e, item.id), 
                        // Redirect()
                    ]
                }>
                    {item.stock}
                </button>
            </div>
        </div>

    );
    return(
        <div className="main_content">
            <h3>Glow Saloon</h3>
            <div className="spaceND"></div>
                {listItems}
        </div>
    )
}
export default Content;

//https://www.youtube.com/watch?v=i0rbmzyaVaM