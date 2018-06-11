import styled from 'styled-components';
import {blueColor} from "../../api/const";

export const InfoContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
`;

export const LabelInfo = styled.div`
  border-color: #555658;
  border-radius: 18px;
  background-color: #555658;
  color: #fff;
  font-size: 16px;
  text-align: center;
  padding: 5px 20px;
`;

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
  height: 100px;
`;


export const TextBlue = styled.div`
  color: ${blueColor};
  font-size: 18px;
  padding-left: 50px;
  line-height: 80px;
`;

export const TabCurrency = styled.div`
  background-color: #404243;
  color: #fff;
  margin-left: 20px;  
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  span {
    display: block;
    font-weight: 700;
  }
`
export const BodyCurrency = styled.div`
  text-align: center;
`;
