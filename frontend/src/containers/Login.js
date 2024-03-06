import React from "react";
import {
  Grid,
  Message
} from "semantic-ui-react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { authLogin as login } from "../store/actions/auth";
import '../assets/css/landingpage.module.css'
import CustomLoginForm from "./CustomLoginForm";

class LoginForm extends React.Component {
  state = {
    username: "user",
    password: "password",
    formError: null
  };

  handleSubmit = e => {
    e.preventDefault();
    const { username, password } = this.state;
    if (username !== "" && password !== "") {
      this.props.login(username, password);
    } else {
      this.setState({
        formError: "Please enter all the form fields"
      });
    }
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
      formError: null
    });
  };

  render() {
    const { username, password } = this.state;
    const { formError } = this.state;
    const { loading, error, authenticated } = this.props;
    if (authenticated) {
      return <Redirect to="/account/studio" />;
    }
    return (
      <Grid>
        <Grid.Column>
          <CustomLoginForm username={username} password={password}
            onChange={this.handleChange}
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
      </Grid>
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
    login: (username, password) => dispatch(login(username, password))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);
