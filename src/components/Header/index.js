import React from 'react';
import { connect } from 'react-redux';
import {
  HeaderWrapper,
  HeaderContent,
  LeftHeader,
  TextBlue,
  TabCurrency,
  BodyCurrency,
  InfoContainer
} from "./styled";
import { Row, Col4, Col3, Col5 } from "../App/styled";
import NewsFeed from './NewsFeed';
import Info from './Info';
import UserSelectInfo from './UserSelectInfo';
import {getIsAuthorized} from "../../reducers/auth/index";
import Logo from '../commons/Logo';

export class Header extends React.Component {
  state = {};

  render() {
    return (
      <HeaderWrapper>
        <HeaderContent>
          <Row>
            <Col4>
              <Logo />
              <TextBlue>Торги</TextBlue>
            </Col4>
            <Col3>
              <TabCurrency>
                <BodyCurrency>
                  44444 <span>1 BTC</span>
                </BodyCurrency>
              </TabCurrency>
              <TabCurrency>
                <BodyCurrency>
                  5555 <span>1 ETH</span>
                </BodyCurrency>
              </TabCurrency>
            </Col3>
            <Col5 >
              <InfoContainer>
                <NewsFeed/>
                <Info/>
                <UserSelectInfo/>
              </InfoContainer>
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