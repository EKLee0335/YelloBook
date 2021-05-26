import React from 'react'
import Navbar from '../Navbar/navbar'
import './home.css'
function Home(){
    return(
        <div className = "container-fluid outContainer">
            <div className="row">
                <Navbar/>
            </div>
            
            <div className="row">
               <div className="wrapStyle">
                 <img className='main-img img-fluid' src="https://images.pexels.com/photos/1340588/pexels-photo-1340588.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"  alt="...">
                 </img>
                 <h1 className='fontStyle'>A room without books is like a body without a soul</h1>
               </div>
            </div>
            
            <div className="row footer">
                <div className="container-fluid fo">
                    <div className="row iconSet">
                        <div className="col text-center">
                            <a href="#"><img className="link" alt="" src="http://startupbeat.hkej.com/wp-content/uploads/2016/05/Instagram-ICON-13MAY.png"></img></a>
                        </div>
                        <div className="col text-center">
                             <a href="#"><img className="link" alt="" src="data:image/png;base64,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"></img></a>
                        </div>
                        <div className="col text-center">
                             <a href="#"><img className="link" alt="" src="https://pbs.twimg.com/profile_images/1354479643882004483/Btnfm47p_400x400.jpg"></img></a>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col text-end">
                            <p>Copy Right YellowBook®️ 2021</p>
                        </div>
                        
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Home