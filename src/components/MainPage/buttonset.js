import React, { useContext } from 'react'
import {cartNumber} from './mainpage'
function ButtonSet(props){
    const number = useContext(cartNumber)
    return(          
            <div className="buttonset" id={props.id}>
                <p className="number" >{number}</p>
                <button className="cartBtn" id="cartAni" onClick={props.show}><i className="fas fa-shopping-cart"></i></button>
            </div>
    )
}
export default ButtonSet;