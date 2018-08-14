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
//import OffcanvasNav from './OffcanvasNav/OffcanvasNav'; 
import MainNav from './MainNav/MainNav';
// jumbotron
import Jumbo from './Jumbo/Jumbo';
// login form
import Login from './Login/Login';


import registerServiceWorker from './registerServiceWorker';

// add svg icons to font awesome library
library.add(faStroopwafel);

// render react components
//ReactDOM.render(<OffcanvasNav />, document.getElementById('offcanvas-nav'));
ReactDOM.render(<MainNav />, document.getElementById('main-nav'));
ReactDOM.render(<Jumbo />, document.getElementById('jumbo'));
ReactDOM.render(<Login />, document.getElementById('login'));

registerServiceWorker();