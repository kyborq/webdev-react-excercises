import React from 'react';
import ReactDOM from 'react-dom';

class PhoneInput extends React.Component {
  constructor(props) {
    super(props);
    // ...

    this.state = {
      phone: ''
    };

    this.isPhoneValid = function() {
      if (this.state.phone.length >= 11 && !isNaN(parseInt(this.state.phone))) {
        return true;
      } else {
        return false;
      }
    };
  }
  format() {
    const { phone } = this.state;

    var masked = this.updateMask(this.deMask(phone));

    return masked;
  }
  render() {
    // ...
    return (
      <div className='phone-check'>
        <input type='text' onChange={event => this.setState({ phone: event.currentTarget.value })} value={this.format()} />
        <input
          type='button'
          value='Отправить'
          onClick={() => {
            if (this.isPhoneValid()) {
              console.log('Отправляем');
            } else {
              console.log('Произошла ошибка');
            }
          }}
        />
      </div>
    );
  }

  updateMask(n) {
    var result = '+7(';

    for (var i = 0; i < n.length; i++) {
      if (i < 10) {
        result += n[i];

        if (i === 2) {
          result += ')';
        }

        if (i === 5 || i === 7) {
          result += '-';
        }
      }
    }

    return result;
  }

  deMask(masked) {
    var result = '';

    for (var i = 0; i < masked.length; i++) {
      if (i > 2 && i < 6) {
        result += masked[i];
      }

      if (i > 6 && i < 10) {
        result += masked[i];
      }

      if (i > 10 && i < 12) {
        result += masked[i];
      }

      if (i > 11 && i < 13) {
        result += masked[i];
      }

      if (i > 13 && i < 16) {
        result += masked[i];
      }
    }

    return result;
  }
}

// class App extends React.Component {
// }

const domContainer = document.querySelector('#like');
ReactDOM.render(React.createElement(PhoneInput), domContainer);
