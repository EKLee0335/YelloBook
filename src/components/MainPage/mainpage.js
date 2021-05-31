import React, {useState } from 'react'
import db from '../Firebase/firebase'
import 'firebase/auth'
import MainContent from './maincontent'
import Category from './category'
import { Redirect } from 'react-router';
import './mainpage.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
function Mainpage(){
   const [ifAuth,setAuth]= useState(false);
   const [Loading,setLoading] = useState(true);
   const [infor,setInfor] = useState('')
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
          setLoading(false)
          setAuth(false)
        }
    })
   function catchUserInfor(user){
      setInfor(user.email)
   }
   return(
       Loading ? <p>Loading...</p>:(
       ifAuth ? 
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
              <MainContent/>
          </div>
             <div className="buttonset">
               <p className="number" >1</p>
               <button className="cartBtn">Cart</button>
             </div>
             
        </div>
       :<Redirect to='signup'></Redirect>)
      )
}
export default Mainpage