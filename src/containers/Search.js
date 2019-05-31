import React, { Component } from 'react';
import axios from 'axios';
import SearchHeader from '../components/search/js/SearchHeader';
import SearchForm from '../components/search/js/SearchForm';
import SearchFooter from '../components/search/js/SearchFooter';
import NoSearchResult from '../components/search/js/NoSearchResult';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            questionList: [],
            suggestList: [],
            content: "",
            pageNo: 1
        };
    }

    componentDidMount = () => {
        const pageNo = (this.props.match.params.pageNo === undefined) ? 1 : this.props.match.params.pageNo;
        const content = (this.props.match.params.content === undefined) ? "" : this.props.match.params.content;
        this.search(pageNo, content);
    }

    search = (pageNo, content) => {
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
                    questionList: response.data['questionList'],
                    suggestList: response.data['suggestList'],
                    content: content,
                    pageNo: pageNo
                });
            }
        });
    }


    render() {
        let screen;
        if (this.state.questionList.length > 0) {
            screen =
                <div>
                    <main>
                        <SearchHeader search={this.search} content={this.state.content} />
                        <hr />
                        <SearchForm questionList={this.state.questionList} suggestList={this.state.suggestList} search={this.search} />
                        <SearchFooter pageNo={this.state.pageNo} searchAfter={this.state.searchAfter} content={this.state.content} search={this.search} />
                    </main>
                </div>
        } else {
            screen =
                <div>
                    <SearchHeader search={this.search} content={this.state.content} />
                    <hr />
                    <NoSearchResult/>
                </div>
        }

        return (
            <main>
                {screen}
            </main>
            
        );
    }
}


export default Search;