import React from 'react';
import PropTypes from 'prop-types';
import { ButtonOffset, Buttons } from './styled';

const offsets = {
  '2h': '2ч',
  '4h': '4ч',
  '8h': '8ч',
  '1d': '1д',
  '7d': '7д',
};

class OffsetPanel extends React.PureComponent {
  state = { curBtn: '2h' };

  static getDerivedStateFromProps(props, state) {
    const { offset } = props;
    const { curBtn } = state;

    if(offset !== curBtn) {
      return {curBtn: offset};
    }

    return null;
  }

  handleClick = (e) => {
    const { selectOffset } = this.props;
    const nameBtn = e.target.name;

    this.setState({ curBtn: nameBtn });
    selectOffset(nameBtn);
  };

  render() {
    const { curBtn } = this.state;

    return (
      <Buttons>
        {Object.keys(offsets).map(key => (
          <ButtonOffset
            onClick = {this.handleClick}
            key={key}
            name={key}
            isActive={curBtn === key}
          >
            {offsets[key]}
          </ButtonOffset>
        ))}
      </Buttons>
    );
  }
}

OffsetPanel.propTypes = {
  selectOffset: PropTypes.func,
  offset: PropTypes.string
};

export default OffsetPanel;
