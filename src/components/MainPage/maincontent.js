import { useContext, useEffect, useState } from "react"
import database from '../Firebase/firebase'
import 'firebase/database'
import './maincontent.css'
import {cartNumber} from './mainpage'
function MainContent(props){
    const [books,setBooks] = useState([]);
    const num = useContext(cartNumber);
    useEffect(()=>{
        var root = database.database().ref("/books");
        // console.log(root);
      async function getData(){
           root.on('value', (snapshot) => {
              const data = snapshot.val();
              setBooks(data);
          })
        }
        getData();
    },[])//[] makes useEffect only execute once.
    function showBooks(){
      console.log(books)
      let show = books.map(item=>{
          return  <div key = {item.key} className = "col productBox">
                      <img src={item.url} alt="front cover" className="img"/>
                      <h4>{item.title}</h4>
                      <button className="more">LOOK MORE</button>
                      <button className="cart" onClick={()=>props.upShoppingCart(item)}>ADD TO CART</button>
                   </div>
            

       })
       console.log(show);
       return show
    }
    return <div className="row row-cols-4  justify-content-center">
                {showBooks()}
           </div>

}
export default MainContent