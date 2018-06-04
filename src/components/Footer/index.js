import React from 'react';
import { connect } from 'react-redux';
import {
  FooterBody
} from "./styled";
import {getIsAuthorized} from "../../reducers/auth/index";

export class Footer extends React.Component {
  state = {};

  render() {
    return (
      <FooterBody>
        Footer
      </FooterBody>
    )
  }
}

const mapStateToProps = state => ({
  isAuthorized: getIsAuthorized(state)
});

export default connect(mapStateToProps)(Footer);