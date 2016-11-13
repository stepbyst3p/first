import React from 'react';
import ReactDOM from 'react-dom';
import HelloMessage from './components/HelloMessage';

const appRoot = document.getElementById('application-root');



ReactDOM.render(<HelloMessage name="Jane" />, appRoot);
