import React, { Component } from 'react';
import { Button, ButtonGroup, Card, CardBody } from 'reactstrap';
import upImage from '../../../img/up.PNG';
import downImage from '../../../img/down.PNG';

class QuestionForm extends Component {

    render() {
        return (
            <div>
                <h2>{this.props.question['title']}</h2>
                <div className="row">
                    <div className="col-12 form-inline">
                        <center>
                            <img src={upImage} style={{ "cursor": "pointer" }} />
                            <h4>{this.props.question['score']}</h4>
                            <img src={downImage} style={{ "cursor": "pointer" }} />
                        </center>
                        <div style={{ marginLeft: "2%"}}>
                            <h5 >{this.props.question['body']}</h5>
                            <div className="row" style={{marginBottom:"15%", marginTop:"20%"}}>
                                <div className="col-12">
                                    <ButtonGroup className="mr-2" style={{ height: "30px" }}>
                                        <Button style={{ borderRadius: "10px", backgroundColor: "#B2EBF2", color: "#00838F" }}>
                                            <center style={{ marginTop: "-18%" }}>tag1</center>
                                        </Button>
                                    </ButtonGroup>
                                    <ButtonGroup className="mr-2" style={{ height: "30px" }}>
                                        <Button style={{ borderRadius: "10px", backgroundColor: "#B2EBF2", color: "#00838F" }}>
                                            <center style={{ marginTop: "-18%" }}>tag2</center>
                                        </Button>
                                    </ButtonGroup>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{marginLeft:"5%", paddingRight:"40%"}}>
                    <hr></hr>
                    <font size="2">
                        comment body1
                    </font>
                    <hr></hr>
                    <font size="2">comment body1</font>
                </div>

                <hr></hr>
            </div>
        )
    }
}

export default QuestionForm;
