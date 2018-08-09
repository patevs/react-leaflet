import React from 'react';
import ReactDOM from 'react-dom';

// main style sheet
import './index.css';

// main nav bar
import MainNav from './MainNav/MainNav';
// jumbotron
import Jumbo from './Jumbo/Jumbo';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<MainNav />, document.getElementById('main-nav'));
ReactDOM.render(<Jumbo />, document.getElementById('jumbo'));

registerServiceWorker();