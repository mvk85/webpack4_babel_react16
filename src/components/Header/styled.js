import styled from 'styled-components';
import {blueColor} from "../../api/const";

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

export const LeftHeader = styled.div`
  img {
    width: 180px;
  }
`;

export const TextBlue = styled.div`
  color: ${blueColor};
  font-size: 18px;
`;
