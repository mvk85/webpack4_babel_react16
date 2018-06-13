import React from 'react';
// import {LineChart} from 'react-chartkick';
import {LineChart} from 'react-easy-chart';
import OffsetPanel from './OffsetPanel';
import moment from 'moment';

class Chart extends React.Component {
  render() {
    return (
      <div>
        <h3>Окно графика</h3>
        <OffsetPanel/>
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
