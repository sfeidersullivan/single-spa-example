import React from 'react';
import './style.css';
import reactLogo from './assets/react-logo.svg';

export default class App1 extends React.Component {
  render() {
    return (
      <h2>
        This is App1, written in React.
        <img src={reactLogo}/>
      </h2>
    );
  }
}