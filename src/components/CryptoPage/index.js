import React from 'react';
import Chart from './Chart'
import Sitebar from '../Sitebar';
import { Container } from './styled';
import {
  BodyPage,
  RightSection
} from './styled';
import { Col4, Col8, ContentBlock, Row } from "../App/styled";

class CryptoPage extends React.PureComponent {
  render() {
    return (
      <ContentBlock>
        <Row>
          <Col4>
            <Sitebar/>
          </Col4>
          <Col8>
            <RightSection>
              {/*<Chart
              data={[{name: 'Продажа', data: sellBtc}, {name: 'Покупка', data: purchaseBtc}]}
              min={minBtc}
              max={maxBtc}
              width={750}
              height={400}
            />*/}
              RightSection
            </RightSection>
          </Col8>
        </Row>
      </ContentBlock>
    );
  }
}

export default CryptoPage;