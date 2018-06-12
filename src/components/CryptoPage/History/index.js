import React from 'react';
import TableHistory from './TableHistory';
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
        <TableHistory/>
        <Pagination/>
      </ContainerHistory>
    );
  }
}

export default History;