import React, { Component } from 'react';
import axios from 'axios';
import SearchHeader from '../components/search/js/SearchHeader';
import SearchList from '../components/search/js/SearchList';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            postList:[]
        };
    }

    componentDidMount = () => {
        const pageNo = (this.props.match.params.pageNo === undefined) ? 1 : this.props.match.params.pageNo;
        const content = (this.props.match.params.content === undefined) ? "" : this.props.match.params.content;
        axios({
            url: 'http://localhost:8080/api/v1/kaggle/stackoverflow/post/search/' + pageNo,
            params: {
                content: content
            },
            method: 'GET'
        }).then((response) => {
            if (response.status === 200) {
                console.log(response.data)
                this.setState({
                    postList : response.data
                });
            }
        });

    }


    render() {
        return (
            <main>
                <SearchHeader />
                <hr />
                <SearchList postList={this.state.postList} />
            </main>
        );
    }
}


export default Search;