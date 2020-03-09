import React from 'react';
import ReactDOM from 'react-dom';
import './global.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import Badge from '../src/components/Badge';

ReactDOM.render(
  <Badge
    firstName='Andrés'
    lastName='Campuzano'
    avatar='https://www.gravatar.com/userimage/104927907/a13b414d73c239ac7ec47d152d20f27c.jpeg'
    jobTitle='Frontend Developer, Student'
    twitter='campuzanoCOL'
  />,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
