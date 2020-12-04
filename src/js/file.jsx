import React from 'react';
import ReactDOM from 'react-dom';

const name = 'react';
const element = <h1 className="name">This is {name}</h1>;

ReactDOM.render(
  element,
  document.getElementById('root')
);