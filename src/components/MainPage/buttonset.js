import React from 'react'
import cartNumber from '../../numberContext/numberContext'
function ButtonSet(){
    return( 
        <cartNumber.Consumer>
            {number =>
                <div className="buttonset">
                <p className="number" >{number}</p>
                <button className="cartBtn">Cart</button>
                </div>
            }
        </cartNumber.Consumer>
       
    )
}
export default ButtonSet;