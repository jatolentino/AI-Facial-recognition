import PropTypes from "prop-types";
import React, { Component } from "react";
import logorecognize from '../../assets/images/logorecognize.svg'
import logorecognizeblack from '../../assets/images/logorecognize-black.svg'
import {
  Container,
  Menu,
  Responsive,
  Segment,
  Visibility,
  Image
} from "semantic-ui-react";
import { connect } from "react-redux";
import { logout } from "../../store/actions/auth";
import { withRouter } from "react-router-dom";
import { getWidth } from "../../utils";
import '../../assets/css/landingpage.module.css'


class DesktopContainer extends Component {
  state = {};

  hideFixedMenu = () => this.setState({ fixed: false });
  showFixedMenu = () => this.setState({ fixed: true });

  render() {
    const { children, isAuthenticated } = this.props;
    const { fixed } = this.state;
    return (
      <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
        >
          <Segment
            inverted
            textAlign="center"
            style={{ background: "#000000" }}
            vertical
          >
            <Menu
              fixed={fixed ? "top" : null}
              inverted={!fixed}
              pointing={!fixed}
              secondary={!fixed}
              size="large"
              borderless

            >
              <Container>
                <a href="/" style={{ marginTop: "13px" }}> <Image inverted={fixed} src={fixed ? logorecognizeblack : logorecognize} style={{ marginLeft: "0", marginRight: "20", width: "70%" }} /> </a>
                {/* <Image inverted={fixed} src={fixed ? logorecognizeblack : logorecognize} style={{ marginTop: "5px", marginLeft: "0", marginRight: "20", width: "15%" }} /> */}

                {/* style={{ marginLeft: "0.5em", background: `${fixed && 'black'}`, color: `${fixed && 'white'}` }} */}
                {/* <Menu.Item
                  active={this.props.location.pathname === "/"}
                  onClick={() => this.props.history.push("/")}
                >
                  Home
                </Menu.Item>
                <Menu.Item
                  active={this.props.location.pathname === "/demo"}
                  onClick={() => this.props.history.push("/demo")}
                >
                  Demo
                </Menu.Item> */}
                <Menu.Item position="right" >
                  {isAuthenticated ? (
                    <React.Fragment>
                      {/* <Button
                        inverted={!fixed}
                        onClick={() => this.props.logout()}
                      >
                        Logout
                      </Button>
                      <Button
                        inverted={!fixed}
                        style={{ marginLeft: "0.5em" }}
                        onClick={() =>
                          this.props.history.push("/account/change-email")
                        }
                      >
                        Dashboard
                      </Button> */}
                      <Menu.Item
                        active={this.props.location.pathname === "/account/studio"}
                        onClick={() => this.props.history.push("/account/studio")} sx={{ borderColor: "white" }}
                      >
                        Dashboard
                      </Menu.Item>
                      <Menu.Item
                        active={this.props.location.pathname === "/"}
                        onClick={() => { this.props.logout(); this.props.history.push("/"); }}
                      >
                        Logout
                      </Menu.Item>
                    </React.Fragment>
                  ) : (
                    <React.Fragment>
                      <Menu.Item
                        active={this.props.location.pathname === "/"}
                        onClick={() => this.props.history.push("/")}
                      >
                        Home
                      </Menu.Item>
                      {/* <Menu.Item
                        active={this.props.location.pathname === "/demo"}
                        onClick={() => this.props.history.push("/demo")}
                        style={{ marginLeft: "0.5em" }}
                      >
                        Demo
                      </Menu.Item>
                      <Button
                        inverted={!fixed}
                        style={{ marginLeft: "0.5em" }}
                        onClick={() => this.props.history.push("/login")}
                      //style={{ marginLeft: "0.5em", background: `${fixed && 'black'}`, color: `${fixed && 'white'}` }}
                      >
                        Login
                      </Button>

                      <Button
                        inverted={!fixed}
                        style={{ marginLeft: "0.5em" }}
                        //style={{ marginLeft: "0.5em", background: `${fixed && 'black'}`, color: `${fixed && 'white'}` }}
                        onClick={() => this.props.history.push("/signup")}
                      >
                        Signup
                      </Button> */}
                      <Menu.Item
                        active={this.props.location.pathname === "/demo"}
                        onClick={() => this.props.history.push("/demo")}
                      >
                        Demo
                      </Menu.Item>
                      <Menu.Item
                        active={this.props.location.pathname === "/login"}
                        onClick={() => this.props.history.push("/login")}
                      >
                        Login
                      </Menu.Item>
                      <Menu.Item
                        active={this.props.location.pathname === "/signup"}
                        onClick={() => this.props.history.push("/signup")}
                      >
                        Signup
                      </Menu.Item>
                    </React.Fragment>
                  )}
                </Menu.Item>
              </Container>
            </Menu>
          </Segment>
        </Visibility>

        {children}

      </Responsive>
    );
  }
}

DesktopContainer.propTypes = {
  children: PropTypes.node
};

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => {
      dispatch(logout())
    }
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(DesktopContainer)
);
