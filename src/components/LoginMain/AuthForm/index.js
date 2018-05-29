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
import { loginRequest } from '../../../actions/auth';

export class AuthForm extends React.Component {
  state = {
    login: null,
    password: null
  };

  handleClickBtn = (e) => {
    e.preventDefault();
    const { login, password } = this.state;
    const { loginRequest } = this.props;

    if (login && password) {
      loginRequest({ login, password });
    }
  };

  handleChangeInput = ({ target: { value, name }}) => {
    this.setState({ [name]: value });
  };

  render() {
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
          <Button onClick={this.handleClickBtn}>Войти</Button>
        </ContainerForm>
      </WrapperForm>
    )
  }
}

export default connect(
  null,
  {
    loginRequest
  }
)(AuthForm);