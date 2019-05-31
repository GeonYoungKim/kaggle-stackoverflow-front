import React, { Component } from 'react';
import { Button, ButtonGroup, Card, CardBody } from 'reactstrap';
import upImage from '../../../img/up.PNG';
import downImage from '../../../img/down.PNG';

class QuestionForm extends Component {

    render() {
        let question = this.props.question
        let screen;
        if (question === undefined) {
            screen = <div></div>
        } else {
            let tags = this.props.question['tags'];
            let tagScreen;
            if (tags === undefined || tags.length === 0) {
                tagScreen = <div></div>
            } else {
                tagScreen =
                    <div className="row" style={{ marginBottom: "2%", marginTop: "2%" }}>
                        <div className="col-12">
                            {tags.split(",").map((tag) =>
                                <ButtonGroup className="mr-2" style={{ height: "35px" }}>
                                    <button style={{ borderRadius: "10px", backgroundColor: "#B2EBF2", color: "#00838F" }}>
                                        <center>{tag}</center>
                                    </button>
                                </ButtonGroup>
                            )}
                        </div>
                    </div>
            }

            screen =
                <div>
                    <h2>{this.props.question['title']}</h2>
                    <div className="row">
                        <div className="col-12 form-inline">
                            <center>
                                <img src={upImage} style={{ "cursor": "pointer" }} />
                                <h4>{this.props.question['score']}</h4>
                                <img src={downImage} style={{ "cursor": "pointer" }} />
                            </center>
                            <div style={{ marginLeft: "1%" }}>
                                <h6>{this.props.question['body']}</h6>
                                {tagScreen}
                            </div>
                        </div>
                    </div>
                    <div style={{ marginLeft: "5%", paddingRight: "40%" }}>
                        <hr></hr>
                        <font size="2">
                            comment body1
                        </font>
                        <hr></hr>
                        <font size="2">comment body1</font>
                    </div>

                    <hr></hr>
                </div>
        }
        return (
            <div>
                {screen}
            </div>
        )
    }
}

export default QuestionForm;
