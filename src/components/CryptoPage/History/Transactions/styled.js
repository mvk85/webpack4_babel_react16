import styled from 'styled-components';

export const Th = styled.th`
  width: ${props => props.width ? props.width + '%' : 'auto'};
  padding: 10px 5px 10px 15px;
  text-align: left;
  background-color: #eef1f1;
  font-weight: bold;
`;
export const Td = styled.td`
  text-align: left;
  padding: 10px 5px 10px 15px;
  border: 1px solid #eef1f1;
  min-height: 40px;
`;
export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  th:first-child{
    border-radius: 5px 0 0;
  }
  th:last-child{
    border-radius: 0 5px 0 0;
  }
  margin-bottom: 25px;
`;