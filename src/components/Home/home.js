import React from 'react'
import Navbar from '../Navbar/navbar'
import './home.css'
function Home(){
    return(
        <div className = "container-fluid outContainer">
            <div className="raw">
                <Navbar/>
            </div>
            
            <div className="raw">
               <div className='wrapStyle'>
                 <img className='main-img img-fluid' src="https://images.pexels.com/photos/1340588/pexels-photo-1340588.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"  alt="...">
                 </img>
                 <h1 className='fontStyle'>A room without books is like a body without a soul</h1>
               </div>
            </div>
            
            <div className="raw">
                <div className='container-fluid'>
                    <div className="row justify-content-end">
                        <p className='col-4'>Copy Right YellowBook®️ 2021</p>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Home