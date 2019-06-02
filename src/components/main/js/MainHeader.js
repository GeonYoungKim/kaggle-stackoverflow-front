import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';

class MainHeader extends Component {
    render() {
        let loginButton = 
            <Button style={{ backgroundColor: "#42A5F5", float: "right", marginTop: "-8%", marginRight: "2%" }}>
                <Link to="/signIn" style={{ color: "white", fontWeight: "bold", }}>로그인</Link>            
            </Button>
        if(localStorage.token !== undefined) {
            loginButton = <div></div>
        }
        return (
            <div>
                {loginButton}
            </div>
            
        )

    }
}

export default MainHeader;
