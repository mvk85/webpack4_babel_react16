import React from 'react';
import Chart from './Chart';
import Sitebar from '../Sitebar';
import History from './History';
import { Container } from './styled';
import {
  BodyPage,
  RightSection
} from './styled';
import { Col4, Col8, Col12, ContentBlock, Row } from "../App/styled";

class CryptoPage extends React.PureComponent {
  render() {
    return (
      <ContentBlock>
        <Row>
          <Col4>
            <Sitebar/>
          </Col4>
          <Col8>
            <Row>
              <Col12>
                <Chart/>
              </Col12>
              <Col12>
                <History/>
              </Col12>
            </Row>
          </Col8>
        </Row>
      </ContentBlock>
    );
  }
}

export default CryptoPage;