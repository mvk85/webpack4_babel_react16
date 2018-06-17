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
  display: flex;
  justify-content: flex-end;
  background-color: #edf0f1;
  padding-top: 10px;
  padding-bottom: 10px;
`;
const ButtonOffset = styled.button`  
  margin: 0 4px;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  padding: 2px 16px;
  background-color: ${props => props.isActive ? '#6AB4DD' : 'transparent'};
  color: ${props => props.isActive ? 'white' : '#9998A1'};  
`;

class OffsetPanel extends PureComponent {
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

export default OffsetPanel;
