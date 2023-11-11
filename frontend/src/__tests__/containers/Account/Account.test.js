
describe('APIKey', () => {

    // API key is fetched successfully and displayed
    it('should fetch API key successfully and display it', () => {
      // Mock the authAxios.get function to return a successful response with dummy data
      const mockResponse = { data: [{ pk: 1, key: 'dummyKey' }] };
      authAxios.get = jest.fn().mockResolvedValue(mockResponse);

      // Render the APIKey component
      const wrapper = shallow(<APIKey />);

      // Expect the loading state to be true initially
      expect(wrapper.state().loading).toBe(true);

      // Expect the authAxios.get function to be called with the correct URL
      expect(authAxios.get).toHaveBeenCalledWith(APIkeyURL);

      // Expect the loading state to be false after the API call is resolved
      expect(wrapper.state().loading).toBe(false);

      // Expect the keys state to be updated with the dummy data
      expect(wrapper.state().keys).toEqual(mockResponse.data);

      // Expect the API key to be displayed in the component
      expect(wrapper.find('p').text()).toBe('dummyKey');
    });

    // API key fetch fails due to network error
    it('should handle API key fetch failure due to network error', () => {
      // Mock the authAxios.get function to return a rejected promise with a dummy error
      const mockError = { response: { data: { message: 'Network error' } } };
      authAxios.get = jest.fn().mockRejectedValue(mockError);

      // Render the APIKey component
      const wrapper = shallow(<APIKey />);

      // Expect the loading state to be true initially
      expect(wrapper.state().loading).toBe(true);

      // Expect the authAxios.get function to be called with the correct URL
      expect(authAxios.get).toHaveBeenCalledWith(APIkeyURL);

      // Expect the loading state to be false after the API call is rejected
      expect(wrapper.state().loading).toBe(false);

      // Expect the error state to be updated with the dummy error message
      expect(wrapper.state().error).toBe('Network error');

      // Expect the error message to be displayed in the component
      expect(wrapper.find('Message').props().content).toBe('Network error');
    });
});

describe('APIUsage', () => {

    // Renders billing details for a user with a free trial membership
    it('should render billing details for a user with a free trial membership', () => {
      const mockBillingDetails = {
        membershipType: "free_trial",
        api_request_count: 10,
        next_billing_date: "2022-01-01",
        amount_due: 0
      };

      const wrapper = shallow(<APIUsage />);
      wrapper.setState({ billingDetails: mockBillingDetails });

      expect(wrapper.find(Header).text()).toEqual("Monthly Summary");
      expect(wrapper.find(MyChart)).toHaveLength(1);
    });

    // Displays an error message if cancelling a subscription fails
    it('should display an error message if cancelling a subscription fails', () => {
      const mockError = "Failed to cancel subscription";
      const wrapper = shallow(<APIUsage />);
      wrapper.setState({ error: mockError });

      expect(wrapper.find(Segment)).toHaveLength(1);
      expect(wrapper.find(Header).text()).toEqual("Could not fetch your account details. Try reloading the page");
      expect(wrapper.find(Button).prop("primary")).toEqual(true);
    });
});

describe('Billing', () => {

    // Renders billing details for a user with a free trial membership.
    it('should render billing details for a user with a free trial membership', () => {
      // Mock the necessary dependencies
      const mockAxios = jest.spyOn(authAxios, 'get').mockResolvedValue({ data: { membershipType: 'free_trial', user_name: 'user', api_request_count: 10 } });
      const mockStripePromise = jest.fn();
      const mockElements = jest.fn();
      const mockCheckoutForm = jest.fn();

      // Render the component
      const wrapper = shallow(<Billing />);
  
      // Assert that the billing details are rendered correctly
      expect(wrapper.find('Header').text()).toBe('Monthly Summary');
      expect(wrapper.find('p').at(0).text()).toBe('This a demo account, with no expiration date.');
      expect(wrapper.find('p').at(1).text()).toBe('API requests this month: 10');
      expect(wrapper.find('Elements').prop('stripe')).toBe(mockStripePromise);
      expect(wrapper.find('Elements').prop('options')).toEqual(options);
      expect(wrapper.find('CheckoutForm').prop('className')).toBe(styles);
  
      // Restore the mocked dependencies
      mockAxios.mockRestore();
      mockStripePromise.mockRestore();
      mockElements.mockRestore();
      mockCheckoutForm.mockRestore();
    });

    // Fails to fetch account details.
    it('should fail to fetch account details', () => {
      // Mock the necessary dependencies
      const mockAxios = jest.spyOn(authAxios, 'get').mockRejectedValue({ response: { data: { message: 'Error fetching account details' } } });

      // Render the component
      const wrapper = shallow(<Billing />);
  
      // Assert that the error message is rendered correctly
      expect(wrapper.find('Header').text()).toBe('Could not fetch your account details. Try reloading the page');
      expect(wrapper.find('Button').prop('primary')).toBeTruthy();
  
      // Restore the mocked dependencies
      mockAxios.mockRestore();
    });
});




describe('ChangeEmail', () => {

    // Component renders without crashing
    it('should render without crashing', () => {
      const wrapper = shallow(<ChangeEmail />);
      expect(wrapper.exists()).toBe(true);
    });

    // User can input an invalid email and sees an error message
    it('should display error message when user inputs invalid email', () => {
      const wrapper = shallow(<ChangeEmail />);
      const emailInput = wrapper.find('input[name="email"]');
      emailInput.simulate('change', { target: { name: 'email', value: 'invalid' } });
      const submitButton = wrapper.find('button[type="submit"]');
      submitButton.simulate('click');
      const errorMessage = wrapper.find('Message[error]');
      expect(errorMessage.exists()).toBe(true);
    });
});




describe('ChangePassword', () => {

    // User fills in all fields correctly and submits the form
    it('should submit form when all fields are filled correctly', () => {
      // Mock the necessary dependencies
      const mockAuthAxios = jest.spyOn(utils, 'authAxios').mockImplementation(() => Promise.resolve({}));
      const mockEvent = { preventDefault: jest.fn() };

      // Initialize the component
      const wrapper = shallow(<ChangePassword />);

      // Set the state with valid values
      wrapper.setState({
        currentPassword: 'currentPassword',
        password: 'newPassword',
        confirmPassword: 'newPassword',
        error: null,
        loading: false
      });

      // Simulate form submission
      wrapper.instance().handleSubmit(mockEvent);

      // Check that the form was submitted
      expect(mockEvent.preventDefault).toHaveBeenCalled();

      // Check that the correct API endpoint was called with the correct data
      expect(mockAuthAxios).toHaveBeenCalledWith(constants.changePasswordURL, {
        current_password: 'currentPassword',
        password: 'newPassword',
        confirm_password: 'newPassword'
      });

      // Check that the state was reset after successful submission
      expect(wrapper.state()).toEqual({
        currentPassword: '',
        password: '',
        confirmPassword: '',
        error: null,
        loading: false
      });

      // Restore the original implementation of authAxios
      mockAuthAxios.mockRestore();
    });
});



describe('MyChart', () => {

    // The component should render a Line chart with the provided data and options.
    it('should render a Line chart with the provided data and options', () => {
      const props = {
        thelabel: ['Label 1', 'Label 2', 'Label 3'],
        thedata: [10, 20, 30]
      };
      const wrapper = shallow(<MyChart {...props} />);
      expect(wrapper.find(Line)).toHaveLength(1);
      expect(wrapper.prop('data')).toEqual({
        labels: props.thelabel,
        datasets: [
          {
            type: 'line',
            label: 'API consumption',
            data: props.thedata,
            backgroundColor: 'rgba(189, 195, 199,1)',
            borderColor: 'rgba(0,0,0,1)',
            borderWidth: 1,
            lineTension: 0,
            fill: false,
          },
        ],
      });
      expect(wrapper.prop('options')).toEqual({
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Chart.js',
          },
        },
      });
    });
});



describe('Check', () => {

    // When the component is rendered, it should display a loading state.
    it('should display a loading state when the component is rendered', () => {
      const wrapper = shallow(<Check />);
      expect(wrapper.find('LoadingState')).toHaveLength(1);
    });

    // If the Stripe API fails to load, it should log an error message.
    it('should log an error message if the Stripe API fails to load', () => {
      const consoleSpy = jest.spyOn(console, 'log');
      const stripePromise = loadStripe.mockRejectedValueOnce(new Error('Failed to load Stripe API'));
      shallow(<Check stripePromise={stripePromise} />);
      expect(consoleSpy).toHaveBeenCalledWith('Stripe js hasn\'t loaded yet');
      consoleSpy.mockRestore();
    });
});



describe('CheckoutForm', () => {

    // Renders a form with payment and authentication elements
    it('should render a form with payment and authentication elements when Stripe.js has loaded', () => {
      // Arrange
      const { getByTestId } = render(<CheckoutForm />);
  
      // Act
  
      // Assert
      expect(getByTestId('payment-element')).toBeInTheDocument();
      expect(getByTestId('link-authentication-element')).toBeInTheDocument();
    });

    // Does not render payment or authentication elements if Stripe.js has not loaded
    it('should not render payment or authentication elements if Stripe.js has not loaded', () => {
      // Arrange
      const { queryByTestId } = render(<CheckoutForm />);
  
      // Act
  
      // Assert
      expect(queryByTestId('payment-element')).not.toBeInTheDocument();
      expect(queryByTestId('link-authentication-element')).not.toBeInTheDocument();
    });
});



describe('Completion', () => {

    // Renders a thank you message and a link to the home page.
    it('should render a thank you message and a link to the home page when stripePromise is truthy', () => {
      const stripePromise = Promise.resolve({});
      const wrapper = mount(<Completion stripePromise={stripePromise} />);
  
      expect(wrapper.find('h1').text()).toEqual('Thank you!');
      expect(wrapper.find('a').prop('href')).toEqual('/');
    });
});



describe('Payment', () => {

    // Payment component renders without errors
    it('should render Payment component without errors', () => {
      // Mock the fetch function
      global.fetch = jest.fn(() =>
        Promise.resolve({
          json: () => Promise.resolve({ clientSecret: 'testClientSecret' }),
        })
      );

      // Mock the useState and useEffect hooks
      jest.spyOn(React, 'useState').mockImplementation((initialValue) => [initialValue, jest.fn()]);
      jest.spyOn(React, 'useEffect').mockImplementation((callback) => callback());

      // Mock the stripePromise prop
      const stripePromise = jest.fn();

      // Render the Payment component
      const wrapper = shallow(<Payment stripePromise={stripePromise} />);

      // Assert that the component renders without errors
      expect(wrapper.exists()).toBe(true);
    });
});



describe('Profile', () => {

    // Renders a Shell component with a section containing a profile picture, name, location, job title, and statistics.
    it('should render a Shell component with profile information', () => {
      const wrapper = shallow(<Profile />);
      expect(wrapper.find(Shell)).toHaveLength(1);
      expect(wrapper.find('section')).toHaveLength(1);
      expect(wrapper.find('img')).toHaveLength(1);
      expect(wrapper.find('h3')).toHaveLength(1);
      expect(wrapper.find('.text-blueGray-400')).toHaveLength(2);
      expect(wrapper.find('.text-xl')).toHaveLength(3);
    });
});



describe('code snippet', () => {

    // Renders a Shell component with a vertical Segment, a Container and a Grid with two columns
    it('should render Shell component with correct structure', () => {
      // Arrange
      const wrapper = shallow(<Shell />);
  
      // Assert
      expect(wrapper.find(Segment)).toHaveLength(1);
      expect(wrapper.find(Container)).toHaveLength(1);
      expect(wrapper.find(Grid)).toHaveLength(1);
      expect(wrapper.find(Grid).prop('columns')).toBe(2);
    });

    // The Shell component does not receive props
    it('should not receive any props', () => {
      // Arrange
      const wrapper = shallow(<Shell />);
  
      // Assert
      expect(wrapper.props()).toEqual({});
    });
});




describe('Studio', () => {

    // User selects a file and submits it, receiving a JSON response with facial expression data
    it('should handle file upload and receive JSON response', () => {
      // Mock the necessary dependencies
      jest.mock('axios');
      jest.mock('../../utils', () => ({
        authAxios: {
          post: jest.fn()
        }
      }));
      jest.mock('../../constants', () => ({
        facialRecognitionURL: 'mockedURL'
      }));

      // Import the necessary dependencies
      const React = require('react');
      const { shallow } = require('enzyme');
      const axios = require('axios');
      const { authAxios } = require('../../utils');
      const { facialRecognitionURL } = require('../../constants');
      const Studio = require('./Studio').default;

      // Set up the test data
      const file = new File(['test'], 'test.png', { type: 'image/png' });
      const formData = new FormData();
      formData.append('file', file);
      const response = {
        data: { facialExpression: 'happy' },
        status: 200
      };

      // Set up the mock implementation for axios.post
      authAxios.post.mockResolvedValue(response);

      // Render the component
      const wrapper = shallow(<Studio />);

      // Simulate file selection and form submission
      wrapper.find('#file').simulate('change', { target: { files: [file] } });
      wrapper.find('Form').simulate('submit', { preventDefault: jest.fn() });

      // Assert that the file was uploaded and the response was received
      expect(authAxios.post).toHaveBeenCalledWith(facialRecognitionURL, formData, expect.any(Object));
      expect(wrapper.state('data')).toEqual(response.data);
      expect(wrapper.state('statusCode')).toEqual(response.status);
    });
});


describe('StripeForm', () => {

    // Renders a form with a 'Go pro' button
    it('should render a form with a "Go pro" button', () => {
      // Arrange
      const wrapper = shallow(<StripeForm />);
  
      // Act
  
      // Assert
      expect(wrapper.find('form')).toHaveLength(1);
      expect(wrapper.find('Button').prop('children')).toEqual('Go pro');
    });

    // If 'stripe' prop is null, does not create a token or send a request
    it('should not create a token or send a request when "stripe" prop is null', () => {
      // Arrange
      const stripe = null;
      const wrapper = shallow(<StripeForm stripe={stripe} />);
  
      // Act
      wrapper.instance().submit({ preventDefault: jest.fn() });
  
      // Assert
      expect(wrapper.state('loading')).toBe(false);
      expect(wrapper.state('error')).toBe(null);
    });
});
