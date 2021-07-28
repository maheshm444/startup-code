import React, { Component, Fragment, lazy } from 'react';
import {
  AppBar,
  Button,
  TextField,
  Toolbar,
  Typography,
} from '@material-ui/core';
import { ContactContainer, FormGroup, Span, ButtonContainer } from './styles';
import ContactContent from '../../content/ContactContent.json';
const Contactus = lazy(() => import('./Contactus'));
const Container = lazy(() => import('../../common/Container'));

export class FormUserDetails extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  constructor() {
    super();
    this.state = {};
  }

  render() {
    const { values, handleChange } = this.props;
    return (
      <Fragment>
        <AppBar style={{ background: '#2E3B55' }} position="sticky">
          <Toolbar title="Enter User Details">
            <Typography color="inherit" variant="title">
              Enter User Details
            </Typography>
          </Toolbar>
        </AppBar>
        <Container>
          <Contactus
            title={ContactContent.title}
            content={ContactContent.text}
            id="contact"
          />
        </Container>
        {/* <TextField
          label="First Name"
          onChange={handleChange("firstName")}
          defaultValue={values.firstName}
        />
        <br />
        <TextField
          label="Last Name"
          onChange={handleChange("lastName")}
          defaultValue={values.lastName}
        />
        <br />
        <TextField
          label="Qualification"
          onChange={handleChange("qualification")}
          defaultValue={values.qualification}
        />
        <br />
        <TextField
          label="Email"
          onChange={handleChange("email")}
          defaultValue={values.Email}
        />
        <br />
        <br /> */}
        {/* <Button
          style={{ background: '#2E3B55', color: '#FFFFFF' }}
          label="Continue"
          onClick={this.continue}
        >
          Continue
        </Button> */}
        <ButtonContainer>
          <Button name="submit" onClick={this.continue}></Button>
        </ButtonContainer>
      </Fragment>
    );
  }
}

export default FormUserDetails;
