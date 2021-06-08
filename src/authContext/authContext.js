import React, { useState } from 'react'
import database from '../components/Firebase/firebase'


export const userAuth = React.createContext();

function Auth(props){
   const [login,setLogin] = useState(false); 
   const [load,setLoad] = useState(false);

   database.auth().onAuthStateChanged(function(user) {
         if (user) {
            // console.log(true);
            setLogin(true);
            setLoad(false);
         } else {
            // console.log('hi');
            setLogin(false);
            setLoad(true);
            }
         });
   
   return(
      <userAuth.Provider value={{login, load}}>
         {console.log("login="+login, "load="+load)}
         {props.children}
      </userAuth.Provider>
   )
}
export default Auth;