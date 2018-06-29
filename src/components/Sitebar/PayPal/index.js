import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { ButtomInfo, ButtomCaution } from '../../App/styled';
import {
  getCurrentBtcPurchase, getCurrentBtcSell, getCurrentEthPurchase,
  getCurrentEthSell, getSelectedCurrency
} from '../../../reducers/currency/index';
import {
  buyCurrencyRequest,
  sellCurrencyRequest,
} from '../../../actions/currency';
import {
  BlockPayPal,
  ItemPayPal,
  ItemPayPalInput,
  DesPayPal
} from './styled';

const INPUT_FIAT = 'inputFiat';
const INPUT_SELL = 'inputSell';
const INPUT_PURCHASE = 'inputPurchase';

const setFiat = (sell, purchase) => ({inputFiat}) => {
  const parsed = isNaN(inputFiat) ? 0 : parseFloat(inputFiat);

  return {
    inputSell: parsed * sell,
    inputPurchase: parsed * purchase,
  };
};

const setSell = (sell, purchase) => ({inputSell}) => {
  const parsedSell = isNaN(inputSell) ? 0 : parseFloat(inputSell);
  const nextFiat = parsedSell / sell;
  return {
    inputFiat: nextFiat,
    inputPurchase: nextFiat * purchase,
  };
};

const setPurchase = (sell, purchase) => ({inputPurchase}) => {
  const parsedPurchase = isNaN(inputPurchase) ? 0 : parseFloat(inputPurchase);
  const nextFiat = parsedPurchase / purchase;
  return {
    inputFiat: nextFiat,
    inputSell: nextFiat * sell,
  };
};

class PayPal extends React.Component {
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
    const {
      currentBtcPurchase,
      currentBtcSell,
      currentEthPurchase,
      currentEthSell,
      selectedCurrency
    } = nextProps;
    const { currentInput } = prevState;
    const currencyName = selectedCurrency;
    const sell = currencyName === 'btc' ? currentBtcSell : currentEthSell;
    const purchase = currencyName === 'btc' ? currentBtcPurchase : currentEthPurchase;
    let newState;

    if (currentInput === INPUT_FIAT) {
      newState = setFiat(sell, purchase)(prevState);
    } else if (currentInput === INPUT_SELL) {
      newState = setSell(sell, purchase)(prevState);
    } else if (currentInput === INPUT_PURCHASE) {
      newState = setPurchase(sell, purchase)(prevState);
    }

    return {...newState, currencyName, sell, purchase};
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
      return undefined;
    } else {
      this.changeInputs(name, sell, purchase);
    }
  };

  handleBlur = () => {
    this.setState({currentInput: INPUT_FIAT});
  };

  handleFocus = event => {
    this.setState({currentInput: event.target.name});
  };

  changeInputs(name, sell, purchase) {
    if (name === INPUT_FIAT) {
      this.setState(setFiat(sell, purchase));
    } else if (name === INPUT_SELL) {
      this.setState(setSell(sell, purchase));
    } else if (name === INPUT_PURCHASE) {
      this.setState(setPurchase(sell, purchase));
    }
  }

  render() {
    const {
      inputFiat,
      inputSell,
      inputPurchase,
      currencyName
    } = this.state;

    return (
      <BlockPayPal>
        <h3>Покупка/продажа</h3>
        <ItemPayPal>
          <ItemPayPalInput>
            <input
              type="text"
              value={inputFiat}
              name={INPUT_FIAT}
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
              name={INPUT_PURCHASE}
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
              name={INPUT_SELL}
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
  currentEthSell: getCurrentEthSell(state),
  selectedCurrency: getSelectedCurrency(state)
});

const mapDispatchToProps = {
  buyCurrencyRequest,
  sellCurrencyRequest
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PayPal));