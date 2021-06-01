import React, {useContext, useState } from 'react'
import db from '../Firebase/firebase'
import 'firebase/auth'
import MainContent from './maincontent'
import Category from './category'
import { Redirect } from 'react-router';
import './mainpage.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ButtonSet from './buttonset'
import CartItem from './cartItem'
// import cartNumber from '../../numberContext/numberContext' 
export const cartNumber = React.createContext();

function Mainpage(){
   const [ifAuth,setAuth]= useState(false);
   const [Loading,setLoading] = useState(true);
   const [infor,setInfor] = useState('');
   const [items,setItems] = useState('hidden'); 
   const [number,setNumber] = useState(1);

   const num = useContext(cartNumber);
  
  function handleLogout(){
      db.auth().signOut().then(() => {
        // Sign-out successful.
        window.location.href = '/'
      }).catch((error) => {
        // An error happened.
      });
   }
   db.auth().onAuthStateChanged((user)=>{
        if(user){
          setAuth(true)
          setLoading(false) 
          catchUserInfor(user);
          console.log("hi");
        }
        else{ 
          setLoading(false);
          setAuth(false);
        }
    })
   function catchUserInfor(user){
      setInfor(user.email);
   }
   function upShoppingCart(){
     setNumber(number+1);
   }
   function downShoppingCart(){
     setNumber(number-1);
   }
   function delItem(){
   }
   function show(){
     setItems("items");
   }
   function cancel(){
    setItems("hidden");
   }
   return(
       Loading ? <p>Loading...</p>:(
       ifAuth ? 
       <cartNumber.Provider value={number}>
       <div className="outside">
          <div className="container-fluid">
              <div className="row">
                <nav className="navbar mainpageNav">
                <h1>Welecome {infor}</h1> 
                <button className="btn btn-danger mainpageBtn" onClick={handleLogout}>logout</button>              
                </nav>
              </div>
              <div className="row">
                <Category/>
              </div>
              <MainContent upShoppingCart={upShoppingCart}/>
          </div>

          <ButtonSet show={show}></ButtonSet>
          
          <div id={items}>
            <CartItem delItem={delItem} upShoppingCart={upShoppingCart} downShoppingCart={downShoppingCart}></CartItem>
            <div className="cancelBtn">
              <button onClick={cancel}>Cancel</button>
            </div>
          </div>
            
      
        </div>
        </cartNumber.Provider>
       :<Redirect to='signup'></Redirect>)
      )
}
export default Mainpage