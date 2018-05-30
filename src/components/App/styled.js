import styled from 'styled-components';

const FlexWidth = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ContentBlock = styled.div`
  width: 1200px;
`;

export const HeaderWrapper = FlexWidth.withComponent('header').extend`
  background-color: #2b2c2e;
  height: 80px;
  color: #fff;
`;

export const HeaderContent = ContentBlock.extend`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const MainWrapper = FlexWidth.withComponent('main').extend`
  min-height: calc(100% - 80px);
  margin-bottom: -100px;

  &:after {
    content: '';
    display: block;
    height: 100px;
  }
`;

export const MainContent = ContentBlock.extend`
  padding-top: 10px;
`;

export const Footer = FlexWidth.withComponent('footer').extend`
  background-color: #1f2022;
  height: 100px;
`;