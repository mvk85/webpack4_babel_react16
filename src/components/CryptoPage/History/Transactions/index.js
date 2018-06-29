import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import { fetchUserTransactionsRequest } from '../../../../actions/transactions/index';
import {getUserTransactions, userTransactionsIsLoading} from '../../../../reducers/transactions/index';
import {getSelectedCurrency} from '../../../../reducers/currency/index';
import { Th, Td, Table } from './styled';

export class Transactions extends React.PureComponent {
  componentDidMount() {
    this.props.fetchTransactions();
  }

  getEntry = () => {
    const { transactions, currency } = this.props;
    const delta = currency === 'btc' ? 'btc_delta' : 'eth_delta';
    const arTransactions = transactions.filter(transaction => delta in transaction).map((transaction, index) => (
      <tr key={index}>
        <Td>{ transaction[delta] > 0 ? 'Покупка' : 'Продажа' }</Td>
        <Td>{ moment(transaction.created_at).format('DD.MM.YY HH:mm') }</Td>
        <Td>{ Number(transaction[delta]) }</Td>
        <Td>{ parseFloat(transaction.usd_delta) }</Td>
      </tr>
    ));

    if (arTransactions.length < 1) {
      return (
        <tr>
          <Td>-</Td>
          <Td>-</Td>
          <Td>-</Td>
          <Td>-</Td>
        </tr>
      );
    }

    return arTransactions;
  };

  render() {
    const { currency } = this.props;

    return (
      <Table>
        <thead>
          <tr>
            <Th width='20'>Операция</Th>
            <Th width='40'>Дата</Th>
            <Th width='20'>{currency === 'btc' ? 'BTC' : 'ETH'}</Th>
            <Th width='20'>USD</Th>
          </tr>
        </thead>
        <tbody>
          {this.getEntry()}
        </tbody>
      </Table>
    );
  }
}
const mapStateToProps = state => ({
  isLoading: userTransactionsIsLoading(state),
  transactions: getUserTransactions(state),
  currency: getSelectedCurrency(state)
});

const mapDispatchToProps = {
  fetchTransactions: fetchUserTransactionsRequest
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Transactions);