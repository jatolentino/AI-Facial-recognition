import React from "react";
import {
  Button,
  Container,
  Grid,
  Image,
  Segment
} from "semantic-ui-react";
import { Link } from "react-router-dom";
import '../assets/css/landingpage.module.css'
import BgVideo from '../assets/videos/video.mp4'

import tensorflow from '../assets/images/tensorflow.svg'
import pytorch from '../assets/images/pytorch.svg'
import kubernetes from '../assets/images/kubernetes.svg'

import StepsContainer from './Steps.js'
import ContactContainer from './Contact.js'
import InviteDemoContainer from "./InviteDemo";
import PricingContainer from "./Pricing";
import FooterContainer from "./Footer";

class LandingPage extends React.Component {
  render() {
    return (
      <React.Fragment>
      <div className="landingpage">
        <video src={BgVideo} autoPlay muted loop className="video-bg" />
        <Segment style={{ padding: "", marginTop: "32%", }} vertical>
          {/* tyle={{ padding: "8em 0em" }} */}
          <Grid container verticalAlign="middle">
            <Grid.Row>
              <Grid.Column textAlign="center" >
                <Link to="/login">
                  <Button primary size="huge" style={{ background: "white", color: "black", }}>
                    Get started
                  </Button>
                </Link>
                <p style={{ fontSize: "1.33em", color: "white", marginTop: "2em" }}>
                  Powered by
                </p>
                <div className="flex justify-evenly mr-16 ">
                  <Image src={tensorflow} style={{ height: "36px" }} />
                  <Image src={kubernetes} style={{ height: "36px" }} />
                  <Image src={pytorch} style={{ height: "36px" }} />
                </div>
              </Grid.Column>
            </Grid.Row>
  
          </Grid>
        </Segment>
  
  
        <Segment style={{ padding: "", marginTop: "13%" }} vertical>
          <InviteDemoContainer /> {/* Try our API */}
          <StepsContainer />
          <PricingContainer />
          <ContactContainer />
        </Segment>
  
        <Segment vertical style={{ background: "black", color: "white" }}>
          <Container>
            <FooterContainer />
          </Container>
        </Segment>
  
      </div>
    </React.Fragment>
    )
  }
}


export default LandingPage;
