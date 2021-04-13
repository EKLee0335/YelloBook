import React from 'react'
import { Switch, Route} from 'react-router-dom'
import 'firebase/auth'
import Home from '../Home/home'
import Login from '../Login/login'
import Signup from '../Signup/signup'
import Mainpage from '../MainPage/mainpage'
function Main(){
      return(
        <main>
            <Switch>
              <Route exact path='/' component={Home}/>  
              <Route exact path='/login' component={Login}/>
              <Route exact path='/signup' component={Signup}/>
              <Route exact path='/mainpage' component={Mainpage}/>
            </Switch>
        </main>
      ) 
}

export default Main