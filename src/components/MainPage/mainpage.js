import React, {useState } from 'react'
import db from '../Firebase/firebase'
import 'firebase/auth'
import MainContent from './maincontent'
import Category from './category'
import { Redirect } from 'react-router';
import './mainpage.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ButtonSet from './buttonset'
// import cartNumber from '../../numberContext/numberContext'
function Mainpage(){
   const [ifAuth,setAuth]= useState(false);
   const [Loading,setLoading] = useState(true);
   const [infor,setInfor] = useState('');
   const [number,setNumber] = useState(0);
   const [items,setItems] = useState('hidden');
   const cartNumber = React.createContext();
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
   function setShoppingCart(){
     setNumber(number+1);
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
              <MainContent setShoppingCart={setShoppingCart}/>
          </div>

          <cartNumber.Consumer>
            {number =>
                <div className="buttonset">
                <p className="number" >{number}</p>
                <button className="cartBtn" id="cartAni" onClick={show}>Cart</button>
                </div>
            }
          </cartNumber.Consumer>
          <div id={items}>
              <div>
                <p>test items</p>
               <input type="number"></input>
              </div>
              
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