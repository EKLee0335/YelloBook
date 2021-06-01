import React, {useContext, useState} from 'react'
import './cartItem.css'
import {cartNumber} from './mainpage'
function CartItem(props){
    const num = useContext(cartNumber);
    return(   
            <div className="itemsWrap">
                <p>test item</p> 
                <div className="num">
                    <p>{num}</p> 
                    <button className="up" onClick={props.upShoppingCart}>+</button>
                    <button className="down" onClick={props.downShoppingCart}>-</button>
                </div>
                <button className="del">X</button>
              </div>
    );

}
export default CartItem;