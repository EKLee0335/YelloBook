import React, { useState, useRef} from 'react'
import './signup.css'
import database from '../Firebase/firebase'
import 'firebase/auth'
function Signup(){
    const userEmail = useRef()
    const userPassword = useRef()
    const checkPassword = useRef()
    const [error, setError] = useState('')
    async function handleSubmit(event){
        event.preventDefault();
        if(userPassword.current.value !== checkPassword.current.value){
            return setError('Password do not match');
        } 
        try{
          setError('')
          await database.auth().createUserWithEmailAndPassword(userEmail.current.value,userPassword.current.value)
          window.location.href='/'    
        }
        catch{
          setError('Failed to create an account');
        }
        
    } 
    return(
            <div className = 'form-wrap'>
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-book" viewBox="0 0 16 16">
                    <path d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811V2.828zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492V2.687zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z"/>
                </svg>
                <h1 className='signup-title'>Create your account</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label name="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" name='userEmail' ref={userEmail}  className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    </div>
                    <div className="mb-3">
                        <label name="InputPassword1" className="form-label">Password</label>
                        <input type="password" name='password' ref={userPassword} className="form-control" id="exampleInputPassword1"/>
                    </div>
                    <div className="mb-3">
                        <label name="InputPassword2" className="form-label">Confirm Password</label>
                        <input type="password" name='confirmPassword' ref={checkPassword} className="form-control" id="exampleInputPassword2"/>
                        <div id="emailHelp" className="form-text warning">{error}</div>
                    </div>
                      <button className="btn btn-primary">SignUp</button>
        
                </form>
             </div>


        )

}

export default Signup