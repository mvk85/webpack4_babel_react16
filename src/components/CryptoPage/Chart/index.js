import React, { Component } from 'react';
import {LineChart} from 'react-chartkick';
import { Container } from '../styled';

const offsets = {
  '2h': '2ч',
  '4h': '4ч',
  '8h': '8ч',
  '1d': '1д',
  '7d': '7д',
};

class Chart extends Component {
  static defaultProps = {};

  static propTypes = {};

  state = {};
  /*
    Для получения данных о стоимости валют надо запусить регулярное получение данных,
    а также их получение каждые 15 сек. Реализовать в сагах в currency
  */

  render() {
    return (
      <div>
        {/*<LineChart
          data={[{name: 'Продажа', data: sellBtc}, {name: 'Покупка', data: purchaseBtc}]}
          min={minBtc}
          max={maxBtc}
          width={750}
          height={400}
        />*/}
      </div>
    );
  }
}

export default Chart;
