import React, { Component } from 'react';
import upImage from '../../../img/up.PNG';
import downImage from '../../../img/down.PNG';
import {Button, CardBody, Input, Form, FormGroup, Label } from 'reactstrap';

class AnswerForm extends Component {

    render() {
        let answerList = this.props.answerList
        let screen;
        console.log(answerList);
        if (answerList === undefined || answerList.length === 0) {
            screen = <div></div>
        } else {
            screen = answerList.map((answer) => {
                let accountScreen = <div></div>;
                let profileImageUrl;

                if (answer['account'] !== undefined) {
                    let account = answer['account'];
                    if (account['profileImageUrl'] === undefined || account['profileImageUrl'] === "") {
                        profileImageUrl = "http://download.seaicons.com/icons/iconsmind/outline/512/Talk-Man-icon.png";
                    } else {
                        profileImageUrl = account['profileImageUrl'];
                    }

                    accountScreen =
                        <div key={{ account }} style={{ borderRadius: "10px", backgroundColor: "#B2EBF2", width: "250px", height: "110px", marginTop: "2%", marginRight: "2%", float: "right", textAlign: "right" }}>
                            <div>
                                <font style={{ size: "2", marginRight: "3%" }}> answered {answer['createDate']}</font><br />
                                <table>
                                    <tr>
                                        <td rowspan="2">
                                            <img src={profileImageUrl} style={{ width: "65px", marginLeft: "10%" }} />
                                        </td>
                                        <td>
                                            <div style={{ marginLeft: "10px" }}><font style={{ size: "1" }}>{account['displayName']}</font></div>
                                        </td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                }

                let commentScreen = <div style={{ marginBottom: "5%" }}></div>;

                if (answer['commentList'] !== undefined) {
                    let commentList = answer['commentList'];
                    commentScreen =
                    <div style={{ marginBottom: "5%" }}>
                        <div>
                            {
                                commentList.map((comment) =>
                                    <div key={{ comment }} style={{ marginLeft: "5%" }}>
                                        <hr></hr>
                                        <font style={{ size: "-20%", color: "gray" }}> {comment['body']} - {comment['account']['displayName']}- {comment['createDate']}</font>
                                    </div>
                                )
                            }
                        </div>
                        <div style={{marginTop:"1%", marginLeft:"5%"}}>
                            <Input style={{cols:"300", height:"30px", marginBottom:"2%", width:"70%"}} type="comment" name="text" id="exampleText" ></Input>
                            <Label style={{cursor:"pointer", marginBottom:"2%", color:"blue"}}> add a comment</Label>
                        </div>
                    </div>
                }

                let createAnswerPost = 
                <Form style={{marginBottom:"5%"}}>
                    <FormGroup>
                        <h3 style={{marginBottom:"3%"}}>Your Answer</h3>
                        <Input style={{cols:"300", height:"150px", width:"80%"}} type="textarea" name="text" id="exampleText" />
                    </FormGroup>
                    <Button style={{ backgroundColor: "#42A5F5", color: "white"}}>Post Your Answer</Button>
                </Form>
                

                return (
                    <div>
                        <table cellPadding="15%">
                            <tr>
                                <td>
                                    <CardBody>
                                        <img src={upImage} style={{ "cursor": "pointer" }} />
                                        <div style={{ textAlign: "center", float: "center", margin: "auto" }}><h4>{answer['score']}</h4></div>
                                        <img src={downImage} style={{ "cursor": "pointer" }} />
                                    </CardBody>
                                </td>
                                <td>
                                    <div style={{width:"95%"}}><h6 dangerouslySetInnerHTML={{ __html: answer['body'] }}></h6></div>
                                </td>
                            </tr>
                        </table>
                        <div style={{ marginLeft: "2%", marginBottom: "13%" }}>
                            {accountScreen}
                        </div>
                        <div>
                            {commentScreen}
                        </div>
                        <hr/>
                        {createAnswerPost}
                    </div>
                );
            });
        }

        return (
            <div>
                {screen}
            </div>
        );
    }
}


export default AnswerForm;
