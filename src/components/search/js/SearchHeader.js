import React, { Component } from 'react';
import { Input, Button } from 'reactstrap';
import { Link } from 'react-router-dom';

class SearchHeader extends Component {

    handleChange = (e) => {
        this.setState({
            content: e.target.value
        })
    }

    keyDown = (e) => {
        if (e.key === 'Enter') {
            this.props.search(1, this.state.content);
        }
    }

    render() {
        return (
            <div className="row" style={{marginTop:"1.5%", marginLeft:"1%"}}>
                <div className="col-12 form-inline">
                    <h4 style={{ color: "orange" }}>Stack Overflow</h4>
                    <Input onKeyDown={this.keyDown} onChange={this.handleChange} style={{marginLeft:"2%", width: "35%"}} placeholder={this.props.content}/>
                    <Button style={{ backgroundColor: "#42A5F5", color: "white", marginLeft:"45%"}}>
                        <Link to="/signIn" style={{color: "white", fontWeight: "bold", }}>로그인</Link>
                    </Button>
                </div>
            </div>
        )

    }
}

export default SearchHeader;
