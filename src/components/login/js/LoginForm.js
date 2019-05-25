import React, { Component } from 'react';
import { Card, CardBody, Row, Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class LoginForm extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <center>
                <div className="main-wrap">
                    <div style={{ marginTop: "10%", marginLeft: "35%" }}>
                        <Row>
                            <Col sm="6">
                                <Card body>
                                    <h1 style={{ color: "orange", marginTop:"3%" }}>Stack Overflow</h1>
                                    <Form style={{marginTop:"3%"}}>
                                        <FormGroup>
                                            <Label style={{paddingRight:"90%"}}for="id">Id</Label>
                                            <Input style={{width:"95%"}} type="id" placeholder="id 입력" />
                                        </FormGroup>
                                        <FormGroup>
                                            <Label style={{paddingRight:"90%"}} for="pw">Pw</Label>
                                            <Input style={{width:"95%"}} type="pw" placeholder="pw 입력" />
                                        </FormGroup>
                                    </Form>
                                    <Button style={{backgroundColor: "#42A5F5", color: "white", marginTop:"3%" , width:"95%", fontSize:"250%"}}>로그인</Button>
                                    <hr/>
                                    <CardBody style={{color:"#78909C"}}>
                                        <Label style={{marginLeft:"2%"}}>id 찾기</Label>
                                        <Label style={{marginLeft:"2%"}}>|</Label>
                                        <Label style={{marginLeft:"2%"}}>pw 찾기</Label>
                                        <Label style={{marginLeft:"2%"}}>|</Label>
                                        <Label style={{marginLeft:"2%"}}>회원가입</Label>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                    </div>
                </div>
            </center>


        );
    }
}

export default LoginForm;