import React from 'react';
import {LineChart as Chart} from 'react-easy-chart';
import Spinner from 'react-svg-spinner';

class LineChart extends React.PureComponent {
  render() {
    const {
      isLoading,
      data
    } = this.props;

    if(isLoading) {
      return <Spinner  size="64px" />;
    }

    return (
      <Chart
        lineColors={['blue', 'red']}
        axes
        grid
        verticalGrid
        interpolate={'cardinal'}
        xType={'time'}
        datePattern={'%d-%m %H:%M'}
        width={800}
        height={450}
        style={{
          '.axis path': {
            stroke: '#EDF0F1',
          },
        }}
        data={data}
      />
    );
  }
}

export default LineChart;