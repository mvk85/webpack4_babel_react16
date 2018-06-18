import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { ButtomInfo, ButtomCaution } from '../../App/styled';
import {
  getCurrentBtcPurchase, getCurrentBtcSell, getCurrentEthPurchase,
  getCurrentEthSell
} from "../../../reducers/currency/index";
import {
  buyCurrencyRequest,
  sellCurrencyRequest,
} from '../../../actions/currency';

export const BlockPayPal = styled.div`
  padding-top: 35px;
`;
export const ItemPayPal = styled.div`
  // background-color: #f2f2f2;
  width: 100%;
  color: #fff;
  margin-bottom: 15px;
`;
export const ItemPayPalInput = styled.span`
  //background-color: #f1f1f1;
  //border-radius: 4px;
  color: #ccc;
  width: 150px;
  //display: inline-block;
  margin-right: 15px;
  //padding: 9px 9px 9px 15px;
  font-size: 14px;
  position: relative;
  input {
    display: inline-block;
    //width: 70%;
    color: #000;
    padding-right: 15px;
    background-color: #f1f1f1;
    border-radius: 4px;
    color: #555;
    width: 150px;
    display: inline-block;
    font-size: 14px;
    position: relative;
    border: 0;
    padding: 9px 15px 9px 15px;
    box-sizing: border-box;
  }
`;
export const NumberPayPal = styled.span`
  display: inline-block;
  //width: 70%;
  color: #000;
  padding-right: 15px;
`;
export const DesPayPal = styled.span`
  //display: inline-block;
  //width: 30%;
  text-align: right;
  position: absolute;
  right: 10px;
  top: 0
`;

class PayPal extends React.PureComponent {
  state = {
    currencyName: '',
    inputFiat: 1,
    inputPurchase: this.props.purchase,
    inputSell: this.props.sell,
    sell: '',
    purchase: '',
    currentInput: 'inputFiat'
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log('paypal props = ', nextProps);
    console.log('paypal state = ', prevState);
    const {
      location,
      buyCurrencyRequest,
      sellCurrencyRequest,
      currentBtcPurchase,
      currentBtcSell,
      currentEthPurchase,
      currentEthSell
    } = nextProps;
    const currencyName = location.pathname.includes('btc') ? 'btc' : 'eth';
    const sell = currencyName === 'btc' ? currentBtcSell : currentEthSell;
    const purchase = currencyName === 'btc' ? currentBtcPurchase : currentEthPurchase;

    if (currencyName !== prevState.currencyName) {
      // const sell = currencyName === 'btc' ? currentBtcSell : currentEthSell;
      // const purchase = currencyName === 'btc' ? currentBtcPurchase : currentEthPurchase;
      console.log('Newwwww: ', sell, purchase, currencyName);

      return {
        currencyName
      }
    }

    // this - is not defined in current lifecyrcles
    // if (sell !== prevState.sell || purchase !== prevState.purchase) {
    //   // const sell = currencyName === 'btc' ? currentBtcSell : currentEthSell;
    //   // const purchase = currencyName === 'btc' ? currentBtcPurchase : currentEthPurchase;
    //   console.log('Newwwww: ', sell, purchase, currencyName);
    //
    //   this.changeInputs(prevState.currentInput, sell, purchase);
    // }

    return null;
  }

  componentDidUpdate(prevProps) {
    console.log('componentDidUpdate prevProps = ', prevProps);
    console.log('componentDidUpdate state = ', this.state);
    const {
      location,
      currentBtcPurchase,
      currentBtcSell,
      currentEthPurchase,
      currentEthSell
    } = prevProps;
    const currencyName = location.pathname.includes('btc') ? 'btc' : 'eth';
    const sell = currencyName === 'btc' ? currentBtcSell : currentEthSell;
    const purchase = currencyName === 'btc' ? currentBtcPurchase : currentEthPurchase;

    if (sell !== this.state.sell || purchase !== this.state.purchase) {
      // const sell = currencyName === 'btc' ? currentBtcSell : currentEthSell;
      // const purchase = currencyName === 'btc' ? currentBtcPurchase : currentEthPurchase;
      console.log('Newwwww componentDidUpdate: ', sell, purchase, currencyName);

      this.setState({ sell, purchase });
      this.changeInputs(this.state.currentInput, sell, purchase);
    }
  }

  handleSell = () => {
    const { sellCurrencyRequest } = this.props;
    const { inputFiat, currencyName } = this.state;

    sellCurrencyRequest({currencyName, value: inputFiat});
  };

  handleBuy = () => {
    const {buyCurrencyRequest} = this.props;
    const {inputFiat, currencyName} = this.state;

    buyCurrencyRequest({currencyName, value: inputFiat});
  };

  handleChange = event => {
    const {name, value} = event.target;
    const {sell, purchase} = this.state;

    this.setState({[name]: value});
    if (isNaN(value) || value === '') {
      return false;
    } else {
      this.changeInputs(name, sell, purchase);
    }
  };

  handleBlur = () => {
    this.setState({currentInput: 'inputFiat'});
  };

  handleFocus = event => {
    this.setState({currentInput: event.target.name});
  };

  changeInputs(name, sell, purchase) {
    switch (name) {
      case 'inputFiat': {
        this.setState(({inputFiat}) => {
          const parsed = isNaN(inputFiat) ? 0 : parseFloat(inputFiat);
          return {
            inputSell: parsed * sell,
            inputPurchase: parsed * purchase,
          };
        });
        break;
      }
      case 'inputSell':
        this.setState(({inputSell}) => {
          const parsedSell = isNaN(inputSell) ? 0 : parseFloat(inputSell);
          const nextFiat = parsedSell / sell;
          return {
            inputFiat: nextFiat,
            inputPurchase: nextFiat * purchase,
          };
        });
        break;
      case 'inputPurchase':
        this.setState(({inputPurchase}) => {
          const parsedPurchase = isNaN(inputPurchase) ? 0 : parseFloat(inputPurchase);
          const nextFiat = parsedPurchase / purchase;
          return {
            inputFiat: nextFiat,
            inputSell: nextFiat * sell,
          };
        });
        break;
      default:
        break;
    }
  }

  render() {
    const {
      // buyCurrencyRequest,
      // sellCurrencyRequest,
      // currencyName,
      // currentBtcPurchase,
      // currentBtcSell,
      // currentEthPurchase,
      // currentEthSell
    } = this.props;
    const {
      inputFiat,
      inputSell,
      inputPurchase,
      currencyName
    } = this.state;
    console.log('this.state = ', this.state);
    console.log('props = ', this.props);

    return (
      <BlockPayPal>
        <h3>Покупка/продажа</h3>
        <ItemPayPal>
          <ItemPayPalInput>
            <input
              type="text"
              value={inputFiat}
              name="inputFiat"
              onChange={this.handleChange}
              onFocus={this.handleFocus}
              onBlur={this.handleBlur}
            />
            <DesPayPal>{currencyName.toUpperCase()}</DesPayPal>
          </ItemPayPalInput>
        </ItemPayPal>
        <ItemPayPal>
          <ItemPayPalInput>
            <input
              type="text"
              value={inputPurchase}
              name="inputPurchase"
              onChange={this.handleChange}
              onFocus={this.handleFocus}
              onBlur={this.handleBlur}
            />
            <DesPayPal>$</DesPayPal>
          </ItemPayPalInput>
          <ButtomInfo onClick={this.handleSell}>Продать</ButtomInfo>
        </ItemPayPal>
        <ItemPayPal>
          <ItemPayPalInput>
            <input
              type="text"
              value={inputSell}
              name="inputSell"
              onChange={this.handleChange}
              onFocus={this.handleFocus}
              onBlur={this.handleBlur}
            />
            <DesPayPal>$</DesPayPal>
          </ItemPayPalInput>
          <ButtomCaution onClick={this.handleBuy}>Купить</ButtomCaution>
        </ItemPayPal>
      </BlockPayPal> 
    );
  }
}

const mapStateToProps = state => ({
  currentBtcPurchase: getCurrentBtcPurchase(state),
  currentBtcSell: getCurrentBtcSell(state),
  currentEthPurchase: getCurrentEthPurchase(state),
  currentEthSell: getCurrentEthSell(state)
});

const mapDispatchToProps = {
  buyCurrencyRequest,
  sellCurrencyRequest
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PayPal));