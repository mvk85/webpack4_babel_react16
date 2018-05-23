import styled from 'styled-components';
import userShape from './images/user-shape.svg';
import userLock from './images/padlock-unlock.svg';

export const Button = styled.button`
    margin: 10px 0;
    background-color: #4db6e2;
    color: #fff;
    border: none;
    font-size: 22px;
    padding: 12px 0;
    font-weight: 300;
    letter-spacing: 1.1px;
    cursor: pointer;
`;
export const ContainerInput = styled.div`
    position: relative;
`;
const Fa = styled.span`
    width: 19px;
    height: 19px;
    opacity: 0.4;
    background-size: cover;
    position: absolute;
    top: 25px;
    left: 21px;
`;
export const FaUser = Fa.extend`
    background-image: url(${userShape});    
`;
export const FaLock = Fa.extend`
    background-image: url(${userLock});    
`;
export const InputField = styled.input`
    margin: 10px 0;
    padding: 16px 6px 16px 53px;
    border: 1px solid #dfdfdf;
    border-radius: 7px;
    width: calc(100% - 62px);
`;
export const WrapperForm = styled.div`
    background-color: #fff;
    border-radius: 7px;
    padding: 9px 0;
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
    margin: 11px 0;
    position: relative;
    border: 1px solid #c3c3c3;
    &:before {
      border-radius: 7px;
      background: transparent;
      content: '';
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      z-index: -1;
      box-shadow: 0px 0px 68px 4px rgba(0,0,0,0.23);
    }
  `;

export const ContainerForm = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 10px 20px;
  `;