import React from 'react';
import { connect } from 'react-redux';
import {
  WrapperForm,
  ContainerForm,
  ContainerInput,
  FaUser,
  FaLock,
  InputField,
  Button
} from "./styled";
import { loginRequest, registrationRequest } from '../../../actions/auth';

export class AuthForm extends React.Component {
  state = {
    login: null,
    password: null
  };

  handleAuth = (e) => {
    e.preventDefault();
    const { login, password } = this.state;
    const { loginRequest } = this.props;

    if (login && password) {
      loginRequest({ email: login, password });
    }
  };

  handleReg = (e) => {
    e.preventDefault();
    const { login, password } = this.state;
    const { registrationRequest } = this.props;

    if (login && password) {
      registrationRequest({ email: login, password });
    }
  };

  handleChangeInput = ({ target: { value, name }}) => {
    this.setState({ [name]: value });
  };

  render() {
    const { isAuth } = this.props;

    return (
      <WrapperForm>
        <ContainerForm>
          <ContainerInput>
            <FaUser/>
            <InputField
              type="text"
              name="login"
              placeholder="login"
              onChange={this.handleChangeInput}
            />
          </ContainerInput>
          <ContainerInput>
            <FaLock/>
            <InputField
              type="password"
              name="password"
              placeholder="password"
              onChange={this.handleChangeInput}
            />
          </ContainerInput>
          {isAuth && <Button onClick={this.handleAuth}>Войти</Button>}
          {!isAuth && <Button onClick={this.handleReg}>Регистрация</Button>}
        </ContainerForm>
      </WrapperForm>
    )
  }
}

export default connect(
  null,
  {
    loginRequest,
    registrationRequest
  }
)(AuthForm);