import React, { Component } from 'react';
import { connect } from 'react-redux';
import {withSnackbar} from "notistack";

class Login extends Component {
  state = {
    name: ''
  }

  render() {
    const { name } = this.state;
    return (
      <div className="login-page v-r v-c">
        <h1>Login</h1>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
  }
}

export default connect(mapStateToProps, {})(withSnackbar(Login));
