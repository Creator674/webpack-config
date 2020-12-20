import React from 'react';
import ReactDOM from 'react-dom';

import MessagesData from './file';

function App() {
  return (
    <div>
      <h1 className="react">
        {MessagesData.react}
        {' '}
        and
        {' '}
        {MessagesData.js}
      </h1>
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root'),
);
