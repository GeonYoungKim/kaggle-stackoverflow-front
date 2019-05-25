import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import './css/global-fix171230.css';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
