import React, { Component } from 'react';
import { connect } from 'react-redux';
import {withSnackbar} from "notistack";
import { Button, Card, CardContent, Container, FormControl, TextField } from '@material-ui/core';

class Dashboard extends Component {
  state = {
  }

  render() {
    return (
      <Container maxWidth="sm" className="dashboard-page">
        Dashboard
      </Container>
    );
  }
}

function mapStateToProps(state) {
  return {
  }
}

export default connect(mapStateToProps, {})(withSnackbar(Dashboard));
