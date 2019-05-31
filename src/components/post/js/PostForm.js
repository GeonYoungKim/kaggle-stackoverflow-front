import React, { Component } from 'react';
import QuestionForm from './QuestionForm';
import AnswerForm from './AnswerForm';

class PostForm extends Component {

    render() {
        console.log(this.props.post['question']);
        console.log(this.props.post['answerList']);
        let screen;

        if(this.props.post !== undefined) {
            screen =
            <div>
                <QuestionForm question={this.props.post['question']}/>
                <AnswerForm answerList={this.props.post['answerList']}/>
            </div> 
        }

        return (
            <div style={{marginLeft:"10%", marginTop: "2%"}}>
                {screen}
            </div>
        )
    }
}

export default PostForm;
