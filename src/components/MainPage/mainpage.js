import React, {useState } from 'react'
import db from '../Firebase/firebase'
import 'firebase/auth'
import MainContent from './maincontent'
import { Redirect } from 'react-router';
import './mainpage.css'
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
       <div>
            <nav className="navbar mainpageNav">
              <h1>Welecome {infor}</h1> 
              <button className="btn btn-danger mainpageBtn" onClick={handleLogout}>logout</button>
            </nav>
            <MainContent/>
       </div>
       :<Redirect to='signup'></Redirect>)
      )
}
export default Mainpage