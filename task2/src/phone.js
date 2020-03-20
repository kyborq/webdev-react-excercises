import React from 'react';
import ReactDOM from 'react-dom';

class PhoneInput extends React.Component {
  constructor(props) {
    super(props);
    // ...
  }

  render() {
    // ...
    return <input type='text' />;
  }
}

// class App extends React.Component {
// }

const domContainer = document.querySelector('#like');
ReactDOM.render(React.createElement(PhoneInput), domContainer);
