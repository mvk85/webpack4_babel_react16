import React from 'react';
import styled from 'styled-components';

export const MenuFooter = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
`;
export const ItemMenuFooter = styled.div`
  color: #fff;
  font-size: 18px;
`;

export class Menu extends React.Component {
  state = {};

  render() {
    return (
      <MenuFooter>
        <ItemMenuFooter>
          Главная
        </ItemMenuFooter>
        <ItemMenuFooter>
          Лента
        </ItemMenuFooter>
        <ItemMenuFooter>
          Торги
        </ItemMenuFooter>
        <ItemMenuFooter>
          Профиль
        </ItemMenuFooter>
      </MenuFooter>

    );
  }
}

export default Menu;