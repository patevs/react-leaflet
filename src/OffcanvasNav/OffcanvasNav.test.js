import React from 'react';
import ReactDOM from 'react-dom';
import OffcanvasNav from './OffcanvasNav';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<OffcanvasNav />, div);
  ReactDOM.unmountComponentAtNode(div);
});
