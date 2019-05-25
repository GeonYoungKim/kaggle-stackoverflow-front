import React, { Component } from 'react';
import { Button } from 'reactstrap';

class MainHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <Button style={{ backgroundColor: "#42A5F5", color: "white", fontWeight: "bold", float: "right", marginTop: "-8%", marginRight: "2%" }}>
                로그인
            </Button>
        )

    }
}

export default MainHeader;
