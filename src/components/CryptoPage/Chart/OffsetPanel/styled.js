import styled from 'styled-components';

export const Buttons = styled.div`
  margin-bottom: 15px;
  display: flex;
  justify-content: flex-end;
  background-color: #edf0f1;
  padding-top: 10px;
  padding-bottom: 10px;
`;
export const ButtonOffset = styled.button`  
  margin: 0 4px;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  padding: 2px 16px;
  background-color: ${props => props.isActive ? '#6AB4DD' : 'transparent'};
  color: ${props => props.isActive ? 'white' : '#9998A1'};  
`;