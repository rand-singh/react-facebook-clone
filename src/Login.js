import { Button } from '@material-ui/core'
import React from 'react'
import './Login.scss'

function Login() {    
    const signIn = (e) => {
        console.info('login')
    }

    return (
        <div className="login">
            <img className="login__logoIcon" src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" alt=""/>

            <img className="login__logoText" src="https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg" alt=""/>

            <Button className="login__button" type="submit" onClick={signIn}>
                Sign In
            </Button>
        </div>
    )
}

export default Login
