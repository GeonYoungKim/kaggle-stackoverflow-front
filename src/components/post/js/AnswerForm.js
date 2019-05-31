import React, { Component } from 'react';
import upImage from '../../../img/up.PNG';
import downImage from '../../../img/down.PNG';

class AnswerForm extends Component {

    render() {
        let answerList = this.props.answerList
        let screen;
        console.log(answerList);
        if(answerList === undefined || answerList.length === 0) {
            screen = <div></div>
        } else {
            screen = 
            <div>
                <div className="row">
                    <div className="col-12 form-inline">
                        <center>
                            <img src={upImage} style={{ "cursor": "pointer" }} />
                            <h4>{this.props.answerList[0]['score']}</h4>
                            <img src={downImage} style={{ "cursor": "pointer" }} />
                        </center>
                        <div style={{ marginLeft: "2%", paddingBottom:"5%"}}>
                            <h5 >{this.props.answerList[0]['body']}</h5>
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
            </div>
        }

        return (
            <div>
                {screen}
            </div>
        )
    }
}

export default AnswerForm;
