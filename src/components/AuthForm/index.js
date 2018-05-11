import React from 'react';

export default class AuthForm extends React.Component {
  render() {
    return (
      <div className="form-auth">
        <div className="input">
          <input type="text" />
        </div>
        <div className="input">
          <input type="text" />
        </div>        
        <div className="button">
          <button>
            Войти
          </button>
        </div>        
      </div>
    )
  }
}