import React from 'react'
import './login.css'
import database from '../Firebase/firebase'
import 'firebase/auth'
import { Redirect } from 'react-router';
class Login extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            userEmail: '',
            password: '',
            flag: false,
            inputFlag: false,
        }
    }
    handelChange=(event)=>{
        this.setState(
            {[event.target.name]: event.target.value}
        );
    }
    handleSubmit=(event)=>{
        event.preventDefault();
        const email = this.state.userEmail;
        const password = this.state.password;
        database.auth().signInWithEmailAndPassword(email, password)
                .then((userCredential) => {
                    // Signed in
                    // var user = userCredential.user;
                    console.log(userCredential);
                    this.setState({flag: true});
                    // ...
                })
                .catch((error) => {
                // var errorCode = error.code;
                var errorMessage = error.message;
                console.log(errorMessage);
                })
    }
    render(){
        return(
        this.state.flag?<Redirect to='/mainpage'></Redirect>:
        <div className = 'form-wrap'>
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-book" viewBox="0 0 16 16">
            <path d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811V2.828zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492V2.687zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z"/>
        </svg>
        <h1>Log in to YellowBook</h1>
        <form onSubmit={this.handleSubmit}>
            <div className="mb-3">
                <label name="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" name='userEmail' onChange={this.handelChange} value={this.state.userEmail} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
                <label name="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" name='password' onChange={this.handelChange} value={this.state.password} className="form-control" id="exampleInputPassword1"/>
            </div>
            <button type="submit" className="btn btn-primary" disabled={this.state.inputFlag}>LogIn</button>
        </form>
        </div>
        )
    }

}
export default Login