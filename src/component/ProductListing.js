import React from "react";
// import { QuantityPicker } from 'react-qty-picker';


const ProductListing = (prodDetail : any) => {
    // let value = prodDetail.prodDetail[6];
    // let id = prodDetail.prodDetail[0];
    // const [productStock, setProductStock] = React.useState(value)
    // const [list, setList] = React.useState(product_card);

    
    // function handleChange(newValue) {
    //     setProductStock(newValue)
    // }

    // const handleClick = function (e, stock : number, id : number){
    //     console.log("stock : ",stock)
    //     console.log("id", id)
    //     // console.log("test : ", product_card[id-1].product_name)
    //     // if (stock !== 0){
    //     //     product_card[id-1].stock = stock
    //     //     console.log("edited : ", product_card[id-1].stock)
    //     // } else {
    //     //     console.log("delete")
    //     // }
        
    // }

return(
        <div className="product_content">
            
            <h3>Glow Saloon</h3>
            <div className="spaceND"></div>
            <div className="card" key={2}>
            <div className="card_img_2">
                <img src={prodDetail.prodDetail[5]} alt="imgdsc"/> 
            </div>
            
            <div className="card_header">
                <h2>{prodDetail.prodDetail[1]}</h2>
                <p>{prodDetail.prodDetail[2]}</p>
                <p className="price">{prodDetail.prodDetail[3]}<span>{prodDetail.prodDetail[4]}</span></p>
                {/* <QuantityPicker min={0} max={value} value={prodDetail.prodDetail[6]} 
                onChange={(value)=>{
                    handleChange(value); 
                }}/>
                <div className="btn" onClick = {(e : any) =>
                    handleClick(e, productStock ,id)
                }>
                    Set New Quantity
                </div> */}
            </div>
        </div>
        </div>
    )
}
export default ProductListing;