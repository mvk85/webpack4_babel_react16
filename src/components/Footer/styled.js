import styled from 'styled-components';

const FlexWidth = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FooterBody = FlexWidth.withComponent('footer').extend`
  background-color: #1f2022;
  height: 100px;
`;
