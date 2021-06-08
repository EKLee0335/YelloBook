import React, {useContext, useState } from 'react'
import db from '../Firebase/firebase'
import 'firebase/auth'
import MainContent from './maincontent'
import Category from './category'
import { Redirect } from 'react-router';
import './mainpage.css'
import ButtonSet from './buttonset'
import CartItem from './cartItem'
import {userAuth} from '../../authContext/authContext'
import { useEffect } from 'react/cjs/react.development'
export const cartNumber = React.createContext();
export const bookList = React.createContext();
function Mainpage(){
   const [items,setItems] = useState('hidden'); 
   const [cart,displayCart] = useState('cart')
   const [number,setNumber] = useState(0);
   const [book,setBook] = useState([]);
   
   const login = useContext(userAuth);
   const [load,setLoad] = useState(true);
   const [user,setUser] = useState(false);
  useEffect(()=>{ //componentdidmount
     console.log("componentdidmount");
      if(login.login === false){
          setLoad(false);
          setUser(false);
          console.log("user"+ user, "load"+load)
      }else{
          setLoad(false);
          setUser(true);
          console.log("user"+ user, "load"+load)
      }

  },[login.login]);
  function handleLogout(){
      db.auth().signOut().then(() => {
        // Sign-out successful.
        window.location.href = '/'
      }).catch((error) => {
        // An error happened.
      });
   }
   function upShoppingCart(item){
     let books = book;
     let qun = 1;
     let tmp = books.find(element=>element.title === item.title);
     console.log(tmp);
     if(tmp === undefined){
        books.push({title:item.title, quantity: qun});
     }
     else{
        let target = book.find(element=>element.title === item.title);
        console.log(target);
        target.quantity = target.quantity + 1;
     }
     displayCart('');
     setNumber(number+1);   
     setBook(books);
     console.log(book);
   }
   function downShoppingCart(item){
    let books = book;
    let target = book.find(element=>element.title === item.title);
    console.log(target);
    target.quantity = target.quantity - 1;
    if (target.quantity<1){
      books = books.filter(function(value, index, arr){ 
        return value.title !== item.title;
      });
    }
    setBook(books);
    setNumber(number-1);
   }
   function delItem(item){
      let books = book;
       books = books.filter(function(value, index, arr){ 
        return value.title !== item.title;
      });
      setNumber(number-item.quantity);
      setBook(books);
   }
   function show(){
     setItems("items");
   }
   function cancel(){
    setItems("hidden");
   }
   return(
     load?<h1>Loading......</h1>:
     user? 
       <bookList.Provider value={book}> 
      
       <cartNumber.Provider value={number}>
       <div className="outside">
          <div className="container-fluid">
              <div className="row">
                <nav className="navbar mainpageNav">
                <h1>Welecome</h1> 
                <button className="btn btn-danger mainpageBtn" onClick={handleLogout}>logout</button>              
                </nav>
              </div>
              <div className="row">
                <Category/>
              </div>
              <MainContent upShoppingCart={upShoppingCart}/>
          </div>

          <ButtonSet show={show} id={cart}></ButtonSet>
          
          <div id={items}>
            <CartItem delItem={delItem} upShoppingCart={upShoppingCart} downShoppingCart={downShoppingCart}></CartItem>
            <div className="cancelBtn">
              <button onClick={cancel}>Cancel</button>
            </div>
          </div>
        </div>

        </cartNumber.Provider>
        </bookList.Provider>
       :<Redirect to='signup'></Redirect>
      )
}
export default Mainpage