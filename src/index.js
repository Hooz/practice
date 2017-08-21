import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Router from './routers/router'

ReactDOM.render(<Router />, document.getElementById('root'));
registerServiceWorker();
