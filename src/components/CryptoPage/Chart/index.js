import React from 'react';
// import {LineChart} from 'react-chartkick';
import {LineChart} from 'react-easy-chart';
import moment from 'moment';
// import {Container} from '../styled';
//
// const offsets = {
//   '2h': '2ч',
//   '4h': '4ч',
//   '8h': '8ч',
//   '1d': '1д',
//   '7d': '7д',
// };

/*
  Для получения данных о стоимости валют надо запусить регулярное получение данных,
  а также их получение каждые 15 сек. Реализовать в сагах в currency
*/
class Chart extends React.Component {
  render() {
    return (
      <div>
        <LineChart
          lineColors={['blue', 'red']}
          axes
          grid
          verticalGrid
          interpolate={'cardinal'}
          xType={'time'}
          // datePattern={'%d-%m %H:%M'}
          width={750}
          height={400}
          style={{
            '.axis path': {
              stroke: '#EDF0F1',
            },
          }}
          // data={[
          //   sell.map(([date, value]) => ({x: moment(date).format('DD-MM HH:mm'), y: value})),
          //   purchase.map(([date, value]) => ({x: moment(date).format('DD-MM HH:mm'), y: value})),
          // ]}
          data={[
            [
              { x: '1-Jan-15', y: 20 },
              { x: '1-Feb-15', y: 10 },
              { x: '1-Mar-15', y: 33 },
              { x: '1-Apr-15', y: 45 },
              { x: '1-May-15', y: 15 }
            ], [
              { x: '1-Jan-15', y: 10 },
              { x: '1-Feb-15', y: 15 },
              { x: '1-Mar-15', y: 13 },
              { x: '1-Apr-15', y: 15 },
              { x: '1-May-15', y: 10 }
            ]
          ]}
        />
      </div>
    );
  }
}

export default Chart;
