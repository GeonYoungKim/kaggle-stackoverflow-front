import React, { Component } from 'react';
import axios from 'axios';
import SearchHeader from '../components/search/js/SearchHeader';
import PostForm from '../components/post/js/PostForm';

class Post extends Component {
    constructor(props) {
        super(props);
        this.state = {
            post : {}
        };
    }

    componentDidMount = () => {
        const postId = (this.props.match.params.postId === undefined) ? "" : this.props.match.params.postId;
        axios({
            url: 'http://localhost:8080/api/v1/kaggle/stackoverflow/post/' + postId,
            method: 'GET'
        }).then((response) => {
            if (response.status === 200) {
                console.log(response.data)
                this.setState({
                    post : response.data
                });
            }
        });
    }

    render() {
        
        return (
            <main>
                <SearchHeader/>
                <PostForm post={this.state.post}/>
            </main>
        );
    }
}


export default Post;