import React from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';
import {
  FooterBody
} from "./styled";
import {Col4, Row, ContentBlock} from "../App/styled";
import {getIsAuthorized} from "../../reducers/auth/index";

export const CopyRightBlock = styled.div`
  font-size: 12px;
  color: #fff;
`
export const MenuFooter = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
`
export const ItemMenuFooter = styled.div`
  color: #fff;
  font-size: 18px;
`
export const Logo = styled.div``

export class Footer extends React.Component {
  state = {};

  render() {
    return (
      <FooterBody>
        <ContentBlock>
          <Row>
            <Col4>
              <CopyRightBlock>
                Сделано с любовью и старанием
                на курсе «React.js» в LoftSchool.
                Автор работы: Кистанов Дмитрий
              </CopyRightBlock>
            </Col4>
            <Col4>
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
            </Col4>
            <Col4>
              <Logo>
                Logo
              </Logo>
            </Col4>
          </Row>
        </ContentBlock>
      </FooterBody>
    )
  }
}

const mapStateToProps = state => ({
  isAuthorized: getIsAuthorized(state)
});

export default connect(mapStateToProps)(Footer);