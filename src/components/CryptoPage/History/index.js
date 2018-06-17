import React from 'react';
import Transactions from './Transactions';
import Pagination from './Pagination';
import styled from 'styled-components';

export const ContainerHistory = styled.div`
  width: 100%;
`;

class History extends React.PureComponent {
  render() {
    return (
      <ContainerHistory>
        <h3>История операций</h3>
        <Transactions />
        <Pagination />
      </ContainerHistory>
    );
  }
}

export default History;