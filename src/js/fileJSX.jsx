import React from 'react';
import ReactDOM from 'react-dom';

import MessageFromTSX from './fileTSX'
import MessagesData from './fileJS'

function App() {
  return (
    <div>
      <h1 className="react"> {MessagesData.react} and {MessagesData.js}! </h1>
      <MessageFromTSX />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);