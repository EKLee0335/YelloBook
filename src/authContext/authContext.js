import React, { useState } from 'react'
import database from '../components/Firebase/firebase'


export const userAuth = React.createContext();

function Auth(props){
   const [user,setUser] = useState();
   
   database.auth().onAuthStateChanged(function(user) {
    if (user) {
       setUser(true);
    } else {
       setUser(false);
    }
  });
   return(
      <userAuth.Provider value={user}>
         {props.children}
      </userAuth.Provider>
   )
}
export default Auth;