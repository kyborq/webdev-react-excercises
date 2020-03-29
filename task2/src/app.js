import React from 'react';
import ReactDOM from 'react-dom';

import { PhoneInput } from './components/phone.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    <div id='app'>
      <h1>Введите телефон</h1>
      <PhoneInput />
    </div>;
  }
}

ReactDOM.render(<App />);
