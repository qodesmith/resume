import './styles/styles.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import Resume from './components/resume';

console.log('Loaded, bro.');
document.body.innerHTML = '<div class="aaron-cordova-resume"></div>'

ReactDOM.render(
  <Resume />,
  document.querySelector('.aaron-cordova-resume')
);
