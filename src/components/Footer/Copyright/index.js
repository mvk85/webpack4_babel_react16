import React from 'react';
import styled from 'styled-components';

export const CopyRightBlock = styled.div`
  font-size: 11px;
  color: #fff;
  line-height: 150%;
  width: 180px;
`;

export class Copyright extends React.PureComponent {
  state = {};

  render() {
    return (
      <CopyRightBlock>
        Сделано с любовью и старанием
        на курсе «React.js» в <b>LoftSchool</b>.<br />
        Автор работы: <b>Максим Каськов</b>
      </CopyRightBlock>
    );
  }
}

export default Copyright;