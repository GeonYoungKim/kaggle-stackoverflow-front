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
            let commentScreen = <div></div>;
            console.log(this.props.answerList[0]['commentList']);

            if(this.props.answerList[0]['commentList'] !== undefined) {
                let commentList = this.props.answerList[0]['commentList'];
                commentScreen = 
                <div>
                    {
                        commentList.map((comment) => 
                            <div key={{comment}} style={{marginLeft:"2%"}}>
                                <hr></hr>
                                <font style={{size:"2"}}> {comment['body']} - {comment['account']['displayName']}- {comment['createDate']}</font>
                            </div>
                        )
                    }
                </div>
            }

            let accountScreen = <div></div>;
            console.log(this.props.answerList[0]['account']);
            let profileImageUrl;

            if(this.props.answerList[0]['account'] !== undefined) {
                if(this.props.answerList[0]['account']['profileImageUrl'] == undefined || this.props.answerList[0]['account']['profileImageUrl'] == "") {
                    profileImageUrl = "http://download.seaicons.com/icons/iconsmind/outline/512/Talk-Man-icon.png";
                }else{
                    profileImageUrl = this.props.answerList[0]['account']['profileImageUrl'];
                }

                let account = this.props.answerList[0]['account'];
                accountScreen = 
                <div key={{account}} style={{borderRadius: "10px", backgroundColor: "#B2EBF2",width:"250px",height:"110px",marginTop:"2%",marginRight:"2%", float:"right",textAlign:"right"}}>
                    <div>
                        <font style={{size:"2", marginRight:"3%"}}> answered {this.props.answerList[0]['createDate']}</font><br/>
                        <table>
                            <tr>
                                <td rowspan="2">
                                    <img src={profileImageUrl} style={{width: "65px", marginLeft:"10%"}}  />
                                </td>
                                <td>
                                    <div style={{marginLeft:"10px"}}><font style={{size:"1"}}>{this.props.answerList[0]['account']['displayName']}</font></div>
                                </td>
                            </tr>
                        </table>
                    </div>
                </div>
            }

            screen = 
            <div>
                 <table cellPadding="15%">
                        <tr>
                            <td>
                                <div className="row">
                                    <img src={upImage} style={{ "cursor": "pointer" }} />
                                    <div style={{textAlign:"center", float:"center",margin:"auto"}}><h4>{this.props.answerList[0]['score']}</h4></div>
                                    <img src={downImage} style={{ "cursor": "pointer" }} />
                                </div></td>
                            <td>
                                <h6>{this.props.answerList[0]['body']}</h6>
                            </td>
                        </tr>
                    </table>
                <div style={{ marginLeft: "2%", marginBottom:"13%"}}>
                   {accountScreen}
                </div>
                <div>
                    {commentScreen}
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
