import React from 'react';
import {connect} from 'react-redux';
import {
  FooterBody,
  LogoContainer
} from './styled';
import {Col4, Row, FooterBlock} from '../App/styled';
import {getIsAuthorized} from '../../reducers/auth/index';
import Logo from '../commons/Logo';
import Copyright from './Copyright';
import Menu from './Menu';

export class Footer extends React.Component {
  render() {
    return (
      <FooterBody>
        <FooterBlock>
          <Row height='100%' align='center'>
            <Col4>
              <Copyright />
            </Col4>
            <Col4>
              <Menu />
            </Col4>
            <Col4>
              <LogoContainer>
                <Logo />
              </LogoContainer>
            </Col4>
          </Row>
        </FooterBlock>
      </FooterBody>
    );
  }
}

const mapStateToProps = state => ({
  isAuthorized: getIsAuthorized(state)
});

export default connect(mapStateToProps)(Footer);