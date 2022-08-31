import React, {useState, useEffect} from "react";
import ProductListing from "./ProductListing";
import { QuantityPicker } from 'react-qty-picker';
import Axios from "axios";

const Content = () => {
    
    var productList = [];
    var productList2 = [];
    const [prodDetail, setProdDetail] = useState([]);
    const [productStock, setProductStock] = useState();
    const [goToProduct, setGotoProduct] = useState(false);
    const [productCard, setProductCard] = useState([]);

    useEffect(()=>{
        Axios.get("http://localhost:3001/api/get").then((response)=>{
            console.log(response)
            setProductCard(response.data.rows)
        })
    });

    function handleChange(newValue) {
        setProductStock(newValue)
    }

    const handleClickNewStock = function (e, productStock : number, productId : number){
        
        if (productStock !== 0){
            Axios.post("http://localhost:3001/api/update", {
                stock : productStock, 
                id : productId
            }).then(()=>{
                alert('Update is successful!')
            })
        } else {
            Axios.post("http://localhost:3001/api/delete", {
                id : productId
            }).then(()=>{
                alert('Successfully deleted!')
            })
        }
        
    }
    
    const handleClick = function (e, itemId : number){

        Object.keys(productCard).forEach(function(itemId) {
            productList.push(<option value={itemId}>{productCard[itemId]}</option>);
        });

        productList.forEach((el)=>{
            let prod = el.props.children;
            if(prod.id === itemId){
                productList2.push(prod.id, prod.product_name, prod.description, prod.price, prod.currency, prod.thumb, prod.stock )
            }
        })

        productList2.forEach((data)=>{
            prodDetail.push(data)
        })

        setProdDetail(prodDetail)
        
    }


    if (goToProduct) {
        return (
            <div className="container">
            <ProductListing prodDetail={prodDetail}/>
            </div>
        );
    }

    const listItems = productCard.map((item) => 
        <div className="card" key={item.id} >
            <div className="card_img" onClick = {(e : any) =>
                [handleClick(e, item.id),
                setGotoProduct(true)]
            }>
                <img src={item.thumb} alt={item.imgdsc}/> 
            </div>
            
            <div className="card_header">
                <h2>{item.product_name}</h2>
                <p>{item.description}</p>
                <p className="price">{item.price}<span>{item.currency}</span></p>
                <QuantityPicker min={0} max={item.stock} value={item.stock} 
                onChange={(value)=>{
                    handleChange(value); 
                }}/>
                <div className="btn" onClick = {(e : any) =>
                    handleClickNewStock(e, productStock ,item.id)
                }>
                    Set New Quantity
                </div>
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

