import React from 'react';
import {
  WrapperForm,
  ContainerForm,
  ContainerInput,
  FaUser,
  FaLock,
  InputField,
  Button
} from "./styled";

export default class AuthForm extends React.Component {
  render() {
    return (
      <WrapperForm>
        <ContainerForm>
          <ContainerInput>
            <FaUser/>
            <InputField type="text" name="email" placeholder="email" />
          </ContainerInput>
          <ContainerInput>
            <FaLock/>
            <InputField type="password" name="password" placeholder="password" />
          </ContainerInput>
          <Button>Войти</Button>
        </ContainerForm>
      </WrapperForm>
    )
  }
}