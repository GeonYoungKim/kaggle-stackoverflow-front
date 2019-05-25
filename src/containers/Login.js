import React, { Component } from 'react';
import LoginForm from '../components/login/js/LoginForm';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
        
        };
    }

    render() {
      
        return (
            <main>
                <LoginForm/>
            </main>
        );
    }
}


export default Login;