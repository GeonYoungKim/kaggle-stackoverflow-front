import React, { Component } from 'react';
import MainForm from '../components/main/js/MainForm';
import MainHeader from '../components/main/js/MainHeader';

class Main extends Component {
    render() {
        return (
            <main>
                <MainHeader/>
                <MainForm/>
            </main>
        );
    }
}

export default Main;