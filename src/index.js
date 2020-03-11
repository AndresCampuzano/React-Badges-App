import React from 'react';
import ReactDOM from 'react-dom';
import './global.css';
// import App from './App';
// import Badge from '../src/components/Badge';
import Badges from './pages/Badges';
// import BadgeNew from './pages/BadgeNew';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Badges />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
