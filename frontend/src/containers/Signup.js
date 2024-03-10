import React from "react";
import {
  Grid,
  Message,
} from "semantic-ui-react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { authSignup as signup } from "../store/actions/auth";
import '../assets/css/landingpage.module.css'
import CustomSignupForm from "./CustomSignupForm";

class SignupForm extends React.Component {
  state = {
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    formError: null
  };

  handleSubmit = e => {
    e.preventDefault();
    const { username, email, password, confirmPassword } = this.state;
    if (
      username !== "" &&
      email !== "" &&
      password !== "" &&
      confirmPassword !== "" &&
      this.comparePasswords() === true &&
      this.comparePasswordLengths() === true
    )
      this.props.signup(username, email, password, confirmPassword);
  };

  comparePasswords = () => {
    const { password, confirmPassword } = this.state;
    if (password !== confirmPassword) {
      this.setState({ formError: "Your passwords do not match" });
      return false;
    } else {
      return true;
    }
  };

  comparePasswordLengths = () => {
    const { password, confirmPassword } = this.state;
    if (password.length >= 6 && confirmPassword.length >= 6) {
      return true;
    } else {
      this.setState({
        formError: "Your password must be a minimum of 6 characters"
      });
      return false;
    }
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
      formError: null
    });
  };

  render() {
    const { username, email, password, confirmPassword } = this.state;
    const { formError } = this.state;
    const { loading, error, authenticated } = this.props;
    if (authenticated) {
      return <Redirect to="/" />;
    }
    return (
      <Grid>
        <Grid.Column>

          <CustomSignupForm username={username} email={email} password={password}
            confirmPassword={confirmPassword} onChange={this.handleChange}
            onSubmit={this.handleSubmit} />

          {formError && (
            <Message negative>
              <Message.Header>There was an error</Message.Header>
              <p>{formError}</p>
            </Message>
          )}
          {error && (
            <Message negative>
              <Message.Header>There was an error</Message.Header>
              <p>{error}</p>
            </Message>
          )}


        </Grid.Column>
      </Grid >


    );
  }
}

const mapStateToProps = state => {
  return {
    loading: state.auth.loading,
    error: state.auth.error,
    authenticated: state.auth.token !== null
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signup: (username, email, password1, password2) =>
      dispatch(signup(username, email, password1, password2))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignupForm);
