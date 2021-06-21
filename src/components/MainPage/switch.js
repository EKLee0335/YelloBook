import React, {useState } from 'react'
import { style } from './mainpage';
import './switch.css'
function Switch(props){
    const [ball,setBall] = useState(()=>{
        if(props.backColor.backgroundColor === style.black.backgroundColor){
            return 'ballLe'
        }
        else{
            return 'ball'
        }
    });
    const [icon,setIcon] = useState(<i class="fas fa-sun fa-2x"></i>)
    function darkMode(){
        if(props.backColor.backgroundColor === style.black.backgroundColor){
            setBall('ballLeft');
            setIcon(<i class="fas fa-sun fa-2x"></i>);
        }
        if(props.backColor.backgroundColor === style.white.backgroundColor){
            setBall('ballRight');
            setIcon(<i class="fas fa-moon fa-2x"></i>);
        }
        props.changeTheme();
    }
    return(
        <div className="out"> 
            {console.log(props.backColor)}
            <div className={ball} onClick={darkMode}>{icon}</div>
        </div>
    )
}
export default Switch