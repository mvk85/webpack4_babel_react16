import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {
  HeaderWrapper,
  HeaderContent,
  TextBlue,
  InfoContainer
} from "./styled";
import SwitchCurrency from './SwitchCurrency';
import { Row, Col4, Col3, Col5 } from "../App/styled";
import NewsFeed from './NewsFeed';
import Info from './Info';
import UserSelectInfo from './UserSelectInfo';
import {getIsAuthorized} from "../../reducers/auth/index";
import { selectBtc, selectEth} from '../../actions/currency';
import Logo from '../commons/Logo';
import {getCurrentBtcSell, getCurrentEthSell} from "../../reducers/currency/index";

export class Header extends React.Component {
  handleBtn = () => { this.props.selectBtc(); };
  handleEth = () => { this.props.selectEth(); };

  render() {
    const {
      currentBtn,
      currentEth,
      location
    } = this.props;
    const isBtc = location.pathname.includes('btc');
    const switchCurrency = [
      {
        to: '/crypto/btc',
        currency: currentBtn,
        active: isBtc,
        title: '1 BTC',
        cb: this.handleBtn
      },
      {
        to: '/crypto/eth',
        currency: currentEth,
        active: !isBtc,
        title: '1 ETH',
        cb: this.handleEth
      }
    ];


    return (
      <HeaderWrapper>
        <HeaderContent>
          <Row>
            <Col4>
              <Logo />
              <TextBlue>Торги</TextBlue>
            </Col4>
            <Col3>
              <SwitchCurrency switchCurrency={switchCurrency} />
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
    );
  }
}

const mapStateToProps = state => ({
  isAuthorized: getIsAuthorized(state),
  currentBtn: getCurrentBtcSell(state),
  currentEth: getCurrentEthSell(state)
});

const mapDispatchToProps = {
  selectBtc,
  selectEth
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));