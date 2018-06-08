import React from 'react';
import Chart from './Chart'
import { Container } from './styled';
import {
  BodyPage,
  SiteBar,
  RightSection
} from './styled';

class CryptoPage extends React.PureComponent {
  render() {
    return (
      <BodyPage>
        <Container>
          <SiteBar>
            Sitebar
          </SiteBar>
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
        </Container>
      </BodyPage>
    )
  }
}

export default CryptoPage;