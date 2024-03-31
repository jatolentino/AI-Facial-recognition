import React from "react";
import {
    Segment,
    Header,
    Icon,
    Dimmer,
    Loader,
    Image,
    Button,
    Modal,
    Divider
} from "semantic-ui-react";
import Shell from "./Shell";
import SubscribeForm from "./SubscribeForm";
import ShortParagraphIMG from "../../assets/images/short_paragraph.png";
import { authAxios } from "../../utils";
import { cancelSubscriptionURL } from "../../constants";
import { loadStripe } from '@stripe/stripe-js';
import MyChart from "./Chart";
import { stripePublishKey } from "../../constants";
import { billingURL } from "../../constants";

let present_month = new Date();
let p_month = new Date();
let pp_month = new Date();
let ppp_month = new Date();
let pppp_month = new Date();
let ppppp_month = new Date();

let po_month = new Date();
let ppo_month = new Date();

p_month.setMonth(p_month.getMonth() - 1);
pp_month.setMonth(pp_month.getMonth() - 2);
ppp_month.setMonth(ppp_month.getMonth() - 3);
pppp_month.setMonth(pppp_month.getMonth() - 4);
ppppp_month.setMonth(ppppp_month.getMonth() - 5);

po_month.setMonth(po_month.getMonth() + 1);
ppo_month.setMonth(ppo_month.getMonth() + 2);

let present_month_name = present_month
    .toLocaleString('default', {
        month: 'long',
    })
    .substring(0, 3);
let p_month_name = p_month
    .toLocaleString('default', { month: 'long' })
    .substring(0, 3);
let pp_month_name = pp_month
    .toLocaleString('default', { month: 'long' })
    .substring(0, 3);
let ppp_month_name = ppp_month
    .toLocaleString('default', { month: 'long' })
    .substring(0, 3);
let pppp_month_name = pppp_month
    .toLocaleString('default', { month: 'long' })
    .substring(0, 3);
let ppppp_month_name = ppppp_month
    .toLocaleString('default', { month: 'long' })
    .substring(0, 3);
let po_month_name = po_month
    .toLocaleString('default', { month: 'long' })
    .substring(0, 3);
let ppo_month_name = ppo_month
    .toLocaleString('default', { month: 'long' })
    .substring(0, 3);

let present_date = `${present_month_name}-${present_month.getFullYear()}`;
let p_date = `${p_month_name}-${p_month.getFullYear()}`;
let pp_date = `${pp_month_name}-${pp_month.getFullYear()}`;
let ppp_date = `${ppp_month_name}-${ppp_month.getFullYear()}`;
let pppp_date = `${pppp_month_name}-${pppp_month.getFullYear()}`;
let ppppp_date = `${ppppp_month_name}-${ppppp_month.getFullYear()}`;

let po_date = `${po_month_name}-${po_month.getFullYear()}`;
let ppo_date = `${ppo_month_name}-${ppo_month.getFullYear()}`;

let thedates = [
    ppppp_date,
    pppp_date,
    ppp_date,
    pp_date,
    p_date,
    present_date,
    po_date,
    ppo_date,
];
//*********************************************** */

const stripePromise = loadStripe(stripePublishKey);

const options = {
    mode: 'payment',
    amount: 1099,
    currency: 'usd',
    // Fully customizable with appearance API.
    appearance: {
        /*...*/
    },
};



class APIUsage extends React.Component {
    state = {
        error: null,
        loading: false,
        billingDetails: {},
        open: false
    };

    componentDidMount() {
        this.handleUserDetails();
    }

    show = size => () => this.setState({ size, open: true });

    close = () => this.setState({ open: false });

    handleUnsubscribe = () => {
        this.setState({
            error: null,
            loading: true
        });
        authAxios
            .post(cancelSubscriptionURL)
            .then(res => {
                this.setState({
                    loading: false
                });
                this.close();
                this.handleUserDetails();
            })
            .catch(err => {
                this.setState({
                    error: err.response.data.message,
                    loading: false
                });
            });
    };

    handleUserDetails = () => {
        this.setState({
            loading: true
        });
        authAxios
            .get(billingURL)
            .then(res => {
                this.setState({
                    loading: false,
                    billingDetails: res.data
                });
            })
            .catch(err => {
                this.setState({
                    loading: false,
                    error: err.response.data.message
                });
            });
    };

    renderBillingDetails(details) {
        const free_trial = "free_trial";
        const member = "member";
        const not_member = "not_member";
        let mo = details.api_request_count
        let p_mo = details.api_request_count_p
        let pp_mo = details.api_request_count_pp
        let ppp_mo = details.api_request_count_ppp
        let pppp_mo = details.api_request_count_pppp
        let ppppp_mo = details.api_request_count_ppppp

        let thedata = [ppppp_mo, pppp_mo, ppp_mo, pp_mo, p_mo, mo];
        let thelabel = thedates;
        return (
            <div>
                <Header as="h3">Monthly Summary</Header>
                {details.membershipType === free_trial ? (
                    <React.Fragment>
                        <div >
                            <MyChart thedata={thedata} thelabel={thelabel} />
                        </div>

                    </React.Fragment>
                ) : details.membershipType === member ? (
                    <React.Fragment>
                        <p>Next billing date: {details.next_billing_date}</p>
                        <p>API requests this month: {details.api_request_count}</p>
                        <p>Amount due: ${details.amount_due}</p>
                        <div >
                            <MyChart thedata={thedata} thelabel={thelabel} />
                        </div>
                        <Divider />

                        <Button onClick={this.show("mini")}>Cancel subscription</Button>
                    </React.Fragment>
                ) : details.membershipType === not_member ? (
                    <React.Fragment>
                        <p>Your free trial has ended</p>
                        <div >
                            <MyChart thedata={thedata} thelabel={thelabel} />
                        </div>
                        <SubscribeForm handleUserDetails={this.handleUserDetails} />
                    </React.Fragment>
                ) : null
                }
            </div>
        );
    }

    render() {
        const { loading, error, billingDetails, open, size } = this.state;
        return (
            <React.Fragment>
                <Shell>
                    {error && (
                        <Segment placeholder>
                            <Header icon>
                                <Icon name="rocket" />
                                Could not fetch your account details. Try reloading the page
                            </Header>
                            <a href="/account/billing/">
                                <Button primary>Reload</Button>
                            </a>
                        </Segment>
                    )}
                    {loading && (
                        <Segment>
                            <Dimmer active inverted>
                                <Loader inverted>Detecting Facial Expressions ......</Loader>
                            </Dimmer>
                            <Image src={ShortParagraphIMG} />
                        </Segment>
                    )}
                    {billingDetails && this.renderBillingDetails(billingDetails)}
                </Shell>

                <Modal size={size} open={open} onClose={this.close}>
                    <Modal.Header>Cancel Your Subscription</Modal.Header>
                    <Modal.Content>
                        <p>Are you sure you want to cancel your subscription?</p>
                    </Modal.Content>
                    <Modal.Actions>
                        <Button onClick={this.close} negative>
                            No
                        </Button>
                        <Button
                            positive
                            icon="checkmark"
                            labelPosition="right"
                            content="Yes"
                            onClick={this.handleUnsubscribe}
                        />
                    </Modal.Actions>
                </Modal>
            </React.Fragment>
        );
    }
}

export default APIUsage;
