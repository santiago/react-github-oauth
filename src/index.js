import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'semantic-ui-css/semantic.min.css';
import AppContainer from './AppContainer';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<AppContainer />, document.getElementById('root'));
registerServiceWorker();
