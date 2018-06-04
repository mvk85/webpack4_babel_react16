import React, { Fragment } from 'react';
import {
  BodyPage,
  SiteBar,
  RightSection
} from './styled';

class CryptoPage extends React.PureComponent {
  render() {
    return (
      <BodyPage>
        <SiteBar>
          Sitebar
        </SiteBar>
        <RightSection>
          RightSection
        </RightSection>
      </BodyPage>
    )
  }
}

export default CryptoPage;