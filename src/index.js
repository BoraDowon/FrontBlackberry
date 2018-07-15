import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import './index.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(<App/>, document.getElementById('root'));
registerServiceWorker();
