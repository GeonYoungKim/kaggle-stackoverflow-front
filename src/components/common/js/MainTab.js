import React, { Component } from 'react';
import {
    Link
} from 'react-router-dom';
import MaintabCss from '../css/MainTab.css';

class TabComponent extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="my-maintab">
                <Link to="/dashboard/guide" >
                    <button>
                        보험 가이드
                    </button>
                </Link>
                <Link to="/dashboard/process" >
                    <button>
                        보험 처리
                    </button>
                </Link>
                <Link to="/dashboard/question" >
                    <button>
                        질문 게시판
                    </button>
                </Link>
            </div>
        );
    }
}

export default TabComponent;