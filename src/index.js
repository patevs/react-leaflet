// react
import React from 'react';
import ReactDOM from 'react-dom';

// font awesome
import { library } from '@fortawesome/fontawesome-svg-core'
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStroopwafel } from '@fortawesome/free-solid-svg-icons'

// main style sheet
import './index.css';

// main nav bar
import MainNav from './MainNav/MainNav';
// login form
import Login from './Login/Login';
// jumbotron
import Jumbo from './Jumbo/Jumbo';

import registerServiceWorker from './registerServiceWorker';

// add svg icons to font awesome library
library.add(faStroopwafel);

// render react components
ReactDOM.render(<MainNav />, document.getElementById('main-nav'));
ReactDOM.render(<Login />, document.getElementById('login'));
ReactDOM.render(<Jumbo />, document.getElementById('jumbo'));

registerServiceWorker();