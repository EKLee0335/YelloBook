import React from 'react'
import Auth from '../../authContext/authContext'
import Main from '../Routecontroller/main'

function App(){
    return(
            <Auth>
                <div>
                    <Main/>
                </div>
            </Auth>
    )
}
export default App