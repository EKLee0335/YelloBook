import React, {useContext, useState} from 'react'
import './cartItem.css'
import {cartNumber} from './mainpage'
import {bookList} from './mainpage'
function CartItem(props){
    // const number = useContext(cartNumber);
    const books = useContext(bookList);
    function show(){
        const list = books.map(item=>{
            return <div key = {item.title} className="row cartWrap align-items-center">
                        <p className="col-6">{item.title}</p>
                        <div className="num col-4">
                            <p>{item.quantity}</p> 
                            <button className="up" onClick={()=>{props.upShoppingCart(item)}}>+</button>
                            <button className="down" onClick={()=>{props.downShoppingCart(item)}}>-</button>
                        </div>
                        <button className="btn btn-danger del col-2" onClick={()=>{props.delItem(item)}}>X</button>
                   </div>

        })
        return list;
    }
    return(   
            <div className="container-fluid itemWrap">
                {show()}
            </div>
    );

}
export default CartItem;