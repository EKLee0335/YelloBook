import React, { useEffect, useState } from 'react'
import './category.css'
function Category(){
    const [img,setImg]= useState({src:"https://images.pexels.com/photos/1687678/pexels-photo-1687678.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" ,alt:"AD1"});

    function changeImg(event){
      console.log(event.target.className);
      if(event.target.className === "btn1"){
       setImg({src:"https://images.pexels.com/photos/1687678/pexels-photo-1687678.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500", alt:"AD1"});
      }
      else if(event.target.className === "btn2"){
        setImg({src:"https://images.pexels.com/photos/3225517/pexels-photo-3225517.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500", alt:"AD2"});
      }
      else{
        setImg({src:"https://images.pexels.com/photos/2113566/pexels-photo-2113566.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500", alt:"AD3"});
      }
    }
    return(
      <div className="category">
        <nav>
          <button className="btn1" onMouseOver={changeImg}>page 1st</button>
          <button className="btn2" onMouseOver={changeImg}>page 2nd</button>
          <button className="btn3" onMouseOver={changeImg}>page 3rd</button>
        </nav>
        <div className="imgSet">
            <img src={img.src} alt={img.alt}/>
        </div>
      </div>
    )
}

export default Category;