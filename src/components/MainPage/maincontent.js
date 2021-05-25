import { useEffect, useState } from "react"
import database from '../Firebase/firebase'
import 'firebase/database'
import './maincontent.css'
function MainContent(){
    const [books,setBooks] = useState([]);
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
                      {console.log(item)}
                  </div>
       })
       console.log(show);
       return show
    }
    return <div className="container">
                <div className="row row-cols-4">
                    {showBooks()}
                </div>
           </div> ;
}
export default MainContent