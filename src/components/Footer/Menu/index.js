import React from 'react';
import { MenuFooter, ItemMenuFooter } from './styled';

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