import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(
    <MuiThemeProvider>
        <App />
    </MuiThemeProvider>
, 
document.getElementById('root'));
registerServiceWorker();
