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
import Switch from './switch'
import { CSSTransition } from 'react-transition-group';
export const cartNumber = React.createContext();
export const bookList = React.createContext();
export const theme = React.createContext();
export const style = {
  white:{backgroundColor: 'white'},
  black:{backgroundColor: 'black'}
}
let lastColor = JSON.parse(localStorage.getItem('item'));
function Mainpage(){
   const [items,setItems] = useState('hidden'); 
   const [cart,displayCart] = useState('cart')
   const [number,setNumber] = useState(0);
   const [book,setBook] = useState([]);
   const [load,setLoad] = useState(true);
   let login = useContext(userAuth);
   const [user,setUser] = useState(login);

   const [backColor, setColor]=useState(()=>{
    if(lastColor === null){
      return style.white;
    }
    else{
      return lastColor;
    }
  });

  const [flag,setFlag] = useState(false); // if refresh page
  const [fade,setFade] = useState(false);
  useEffect(()=>{
      if(flag === true){
        localStorage.setItem('item',JSON.stringify(backColor));
      }
      console.log('componmentdidmount') 
  });


  useEffect(()=>{ //componentdidmount
     console.log("mainpage didmount");
     console.log(login);
     if(login!==null){
      setLoad(false);
      setUser(login)
      console.log("stopLoading");
     }
     else{
       setLoad(true)
       setUser(null);
     }
  },[login]);

  function changeTheme(){

    setFade(!fade)
    if(backColor === style.white){
      setColor(style.black);  
      setFlag(true);
    }
    else{
      setColor(style.white);
      setFlag(true);
    }
  }

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
    load?<h1>Loading....</h1>:
    user?
       <theme.Provider value ={backColor}>
       <bookList.Provider value={book}> 
       <cartNumber.Provider value={number}>
       <CSSTransition in={fade} timeout={2000} classNames="fade">
       <div className="outside" style={backColor}>
          <div className="container-fluid">
              <div className="row">
                <nav className="navbar mainpageNav">
                <h1>Welecome</h1>
                <Switch backColor={backColor} changeTheme={changeTheme}></Switch>
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
        </CSSTransition>
        </cartNumber.Provider>
        </bookList.Provider>
        </theme.Provider>
        :
        <Redirect to='signup'></Redirect>
       
      )
}
export default Mainpage