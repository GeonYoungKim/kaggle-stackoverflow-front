import React, { Component } from 'react';
import { Input, Button } from 'reactstrap';

class SearchHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <div className="row" style={{marginTop:"1.5%", marginLeft:"1%"}}>
                <div className="col-12 form-inline">
                    <h4 style={{ color: "orange" }}>Stack Overflow</h4>
                    <Input style={{marginLeft:"2%", width: "35%"}}></Input>
                    <Button style={{ backgroundColor: "#42A5F5", color: "white", fontWeight: "bold", marginLeft:"45%"}}>
                        로그인
                    </Button>
                </div>
            </div>
        )

    }
}

export default SearchHeader;
