import React, { useState } from 'react'
import database from '../components/Firebase/firebase'


export const userAuth = React.createContext();

function Auth(props){
   const [login,setLogin] = useState(null); 
   database.auth().onAuthStateChanged(function(user) {
        console.log("auth....")
        setLogin(user);
   });
   
   return(
      <userAuth.Provider value={login}>
         {/* {console.log("login="+login)} */}
         {props.children}
      </userAuth.Provider>
   )
}
export default Auth;