import React from 'react';
import { connect } from 'react-redux';
import {
  HeaderWrapper,
  HeaderContent,
  LeftHeader
} from "./styled";
import logo from '../../images/logo-bl.svg';
import {getIsAuthorized} from "../../reducers/auth/index";

export class Header extends React.Component {
  state = {};

  render() {

    return (
      <HeaderWrapper>
        <HeaderContent>
          <div>
            <LeftHeader>
              <img src={logo} alt="logo" />
            </LeftHeader>
          </div>
        </HeaderContent>
      </HeaderWrapper>
    )
  }
}

const mapStateToProps = state => ({
  isAuthorized: getIsAuthorized(state)
});

export default connect(mapStateToProps)(Header);