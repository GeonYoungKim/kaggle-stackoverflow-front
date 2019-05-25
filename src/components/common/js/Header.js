import React, { Component } from 'react';
import { TabProvider, Tab, TabPanel, TabList } from 'react-web-tabs';
import logo from '../../../img/logo.jpg';
import HeaderCss from '../css/Header.css';
class LoginComponent extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div className="form-inline my-header">
                <div className="my-logo">
                    <img className="nc--bl--image header-img" src={logo} alt="brand logo"/>
                </div>
                <div className="my-header-title">
                    <h1 style={{color:"orange"}}>Stack Overflow</h1>
                    <h6 style={{color:"gray"}}>(geonyeong.kim)</h6>
                </div>
                <div className="my-login">
                    <button className="my-login-button">
                        로그인
                    </button>
                </div>
            </div>
        );
    }
}

export default LoginComponent;