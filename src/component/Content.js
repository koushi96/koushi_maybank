import React from "react";
import ProductListing from "./ProductListing";
import { QuantityPicker } from 'react-qty-picker';
const product_card = [
    {
        id:1,
        product_name:"Alpha Arbutin",
        description: "Pigmention and uneven skintone",
        price: 67,
        currency: "MYR",
        thumb: "./images/1.jpg",
        stock: 22
    },
    {
        id:2,
        product_name:"Niacinamide",
        description: "Pigmention and uneven skintone",
        price: 87,
        currency: "MYR",
        thumb: "./images/2.jpg",
        stock: 10
    },
    {
        id:3,
        product_name:"Retinol",
        description: "Pigmention and uneven skintone",
        price: 99,
        currency: "MYR",
        thumb: "./images/3.jpg",
        stock: 31
    },
    {
        id:4,
        product_name:"AHA",
        description: "Pigmention and uneven skintone",
        price: 82,
        currency: "MYR",
        thumb: "./images/4.jpg",
        stock: 18
    },
    {
        id:5,
        product_name:"Squalane",
        description: "Pigmention and uneven skintone",
        price: 55,
        currency: "MYR",
        thumb: "./images/5.jpg",
        stock: 12
    },
    {
        id:6,
        product_name:"Glycol",
        description: "Pigmention and uneven skintone",
        price: 99,
        currency: "MYR",
        thumb: "./images/6.jpg",
        stock: 25
    }

]

const Content = () => {
    const [goToProduct, setGotoProduct] = React.useState(false);
    var productList = [];
    var productList2 = [];
    const [prodDetail, setProdDetail] = React.useState([]);
    const [productStock, setProductStock] = React.useState();
    const [items, setItems] = React.useState(product_card);

    function handleChange(newValue) {
        setProductStock(newValue)
        console.log(productStock)
        console.log(items)
    }

    const handleClickNewStock = function (e, stock : number, id : number){
        console.log("stock : ",stock)
        console.log("id", id)
        console.log("test : ", product_card[id-1].product_name)
        if (stock !== 0){
            product_card[id-1].stock = stock
            console.log("edited : ", product_card[id-1].stock)
        } else {
            setItems((items) => items.filter((_, i) => i !== id));
            console.log("delete")
        }
        
    }
    
    const handleClick = function (e, itemId : number){

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

    const listItems = product_card.map((item) => 
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
                {/* <div className="btn" onClick = {(e : any) =>
                    [handleClick(e, item.id),
                    setGotoProduct(true)]
                }>
                    {item.stock}
                </div> */}
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

