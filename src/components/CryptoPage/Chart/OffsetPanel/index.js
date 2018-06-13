import React, { PureComponent } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const offsets = {
  '2h': '2ч',
  '4h': '4ч',
  '8h': '8ч',
  '1d': '1д',
  '7d': '7д',
};

const Buttons = styled.div`
  margin-bottom: 15px;
`;
const ButtonOffset = styled.button`
  border: 1px solid green;
  margin: 0 4px;
  background-color: white;
  color: green;
  padding: 2px 16px;
`;



class OffsetPanel extends PureComponent {
  static defaultProps = {};

  static propTypes = {};

  handleClick = (e) => {

  };

  render() {
    return (
      <Buttons>
        {Object.keys(offsets).map(key => (
          <ButtonOffset
            onClick = {this.handleClick}
            key={key}
          >
            {offsets[key]}
          </ButtonOffset>
        ))}
      </Buttons>
    );
  }
}

export default OffsetPanel;
