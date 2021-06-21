import React, {useState } from 'react'
import './category.css'
function Category(){
    const [img,setImg]= useState({src:"https://images.pexels.com/photos/1687678/pexels-photo-1687678.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" ,alt:"AD1"});
    const [active, setActive] = useState({btn1:"active",btn2:"",btn3:""});
    function changeImg(event){
      console.log(event.target.className);
      if(event.target.className === "btn1"){
       setActive({btn1:"active", btn2:"", btn3:""});
       setImg({src:"https://images.pexels.com/photos/1687678/pexels-photo-1687678.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500", alt:"AD1"});
      }
      else if(event.target.className === "btn2"){
        setActive({btn1:"", btn2:"active", btn3:""});
        setImg({src:"https://images.pexels.com/photos/3225517/pexels-photo-3225517.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500", alt:"AD2"});
      }
      else{
        setActive({btn1:"", btn2:"", btn3:"active"});
        setImg({src:"https://images.pexels.com/photos/2113566/pexels-photo-2113566.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500", alt:"AD3"});
      }
    }
    return(
      <div className="category">
        <nav>
          <button className="btn1" id={active.btn1} onMouseOver={changeImg}>page 1st</button>
          <button className="btn2" id={active.btn2} onMouseOver={changeImg}>page 2nd</button>
          <button className="btn3" id={active.btn3} onMouseOver={changeImg}>page 3rd</button>
        </nav>
        <div className="imgSet">
            <img src={img.src} alt={img.alt}/>
        </div>
      </div>
    )
}

export default Category;