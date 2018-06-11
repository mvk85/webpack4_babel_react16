import styled from 'styled-components';

const WIDTH_CONTAINER = 1200;
const oneColPer = 100/12;

const FlexWidth = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ContentBlock = styled.div`
  width: ${WIDTH_CONTAINER}px;
`;

export const FooterBlock = ContentBlock.extend`
  height: 100%;
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

export const Container = styled.div`
  width: 100%;
`;

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;  
  flex-basis: 0;
  flex-grow: 1;
  max-width: 100%;
  width: 100%;
  position: relative;
  align-items: center;
  height: ${props => props.height ? props.height : 'inherit'}
`;

const Col = (column) => styled.div`
  flex: 0 0 ${(oneColPer*column).toFixed(6)}%;
  max-width: ${(oneColPer*column).toFixed(6)}%;
  position: relative;
  min-height: 1px;
  display: ${props => props.isBlock ? 'block' : 'flex'};
`;

export const Col1 = Col(1);
export const Col2 = Col(2);
export const Col3 = Col(3);
export const Col4 = Col(4);
export const Col5 = Col(5);
export const Col6 = Col(6);
export const Col7 = Col(7);
export const Col8 = Col(8);
export const Col9 = Col(9);
export const Col10 = Col(10);
export const Col11 = Col(11);
export const Col12 = Col(12);


export const Buttom = styled.button`
  font-size: 11px;
  color: #fff;
  text-align: center;
  background-color: gray;
  min-width: 70px;
  padding: 3px;  
  border-radius: 4px;
  border-color: gray;
`;
export const ButtomSuccess = Buttom.extend`
  background-color: green;
  border-color: green;
`;
export const ButtomInfo = Buttom.extend`
  background-color: blue;
  border-color: blue;
`;
export const ButtomCaution = Buttom.extend`
  background-color: red;
  border-color: red;
`;