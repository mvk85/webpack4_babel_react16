import React from 'react';
import { connect } from 'react-redux';
import {
  HeaderWrapper,
  HeaderContent,
  LeftHeader,
  TextBlue
} from "./styled";
import { Row, Col4, Col3, Col5 } from "../App/styled";
import logo from '../../images/logo-bl.svg';
import {getIsAuthorized} from "../../reducers/auth/index";

export class Header extends React.Component {
  state = {};

  render() {
    return (
      <HeaderWrapper>
        <HeaderContent>
          <Row>
            <Col4>
              <LeftHeader>
                <img src={logo} alt="logo" />
              </LeftHeader>
              <TextBlue>Торги</TextBlue>
            </Col4>
            <Col3>
              Center
            </Col3>
            <Col5>
              Right
            </Col5>
          </Row>
        </HeaderContent>
      </HeaderWrapper>
    )
  }
}

const mapStateToProps = state => ({
  isAuthorized: getIsAuthorized(state)
});

export default connect(mapStateToProps)(Header);