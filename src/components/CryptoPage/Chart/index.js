import React from 'react';
// import Spinner from 'react-svg-spinner';
import { connect } from 'react-redux';
// import {LineChart} from 'react-easy-chart';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import OffsetPanel from './OffsetPanel';
import LineChart from './LineChart';
import { selectOffset } from '../../../actions/currency';
import {
  getOffset,
  getPurchaseBtc,
  getSellBtc,
  getIsBtcLoading,
  getIsEthLoading, getSellEth, getPurchaseEth
} from "../../../reducers/currency/index";

export const WrapperChart = styled.div`
  width: 100%;
`;
export const WrapperLineChart = styled.div`
  width: 100%;  
  height: 400px;
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
`;

class Chart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currency: this.props.match.params.currency // 'btc'
    };
  }

  static getDerivedStateFromProps(props, state) {
    const currency = props.match.params.currency;

    if (props.match.params.currency !== state.currency) {
      return { currency };
    }

    return null;
  }

  render() {
    const {
      sellBtc,
      purchaseBtc,
      offset,
      selectOffset,
      sellEth,
      purchaseEth,
      isBtcLoading,
      isEthLoading
    } = this.props;
    const { currency } = this.state;
    const isLoading = isBtcLoading || isEthLoading || false;
    let data;

    if (currency === 'btc') {
      data = [
        sellBtc,
        purchaseBtc
      ];
    } else {
      data = [
        sellEth,
        purchaseEth
      ];
    }

    return (
      <WrapperChart>
        <h3>Окно графика</h3>
        <OffsetPanel offset={offset} selectOffset={selectOffset} />
        <WrapperLineChart>
          <LineChart data={data} isLoading={isLoading} />
        </WrapperLineChart>
      </WrapperChart>
    );
  }
}

const mapStateToProps = state => ({
  sellBtc: getSellBtc(state),
  purchaseBtc: getPurchaseBtc(state),
  sellEth: getSellEth(state),
  purchaseEth: getPurchaseEth(state),
  offset: getOffset(state),
  isBtcLoading: getIsBtcLoading(state),
  isEthLoading: getIsEthLoading(state)
});

const mapDispatchToProps = {
  selectOffset
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Chart));
