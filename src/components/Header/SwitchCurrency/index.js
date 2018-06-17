import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import {
  TabCurrency,
  BodyCurrency,
  WrapperSwitch
} from "../styled";

class SwitchCurrency extends React.PureComponent {
  render() {
    const { switchCurrency } = this.props;

    return (
      <React.Fragment>
        <WrapperSwitch>
          {switchCurrency.map((item, index) => (
            <NavLink to={item.to}  key={index} activeStyle={{color: '#fff'}}>
              <TabCurrency onClick={item.cb} active={item.active}>
                <BodyCurrency>
                  {item.currency} <span>{item.title}</span>
                </BodyCurrency>
              </TabCurrency>
            </NavLink>
          ))}
        </WrapperSwitch>
      </React.Fragment>
    );
  }
}

export default SwitchCurrency;