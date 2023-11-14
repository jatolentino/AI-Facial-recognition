

describe('ContactContainer', () => {

    // Renders a form with name, email, and message inputs and a send button
    it('should render a form with name, email, and message inputs and a send button', () => {
      const wrapper = shallow(<ContactContainer />);
      expect(wrapper.find('input[name="name"]')).toHaveLength(1);
      expect(wrapper.find('input[name="email"]')).toHaveLength(1);
      expect(wrapper.find('textarea[name="message"]')).toHaveLength(1);
      expect(wrapper.find('button')).toHaveLength(1);
    });

    // Submitting the form with empty input fields does not trigger an error
    it('should not trigger an error when submitting the form with empty input fields', () => {
      const wrapper = shallow(<ContactContainer />);
      const form = wrapper.find('form');
      form.simulate('submit', { preventDefault: jest.fn() });
      expect(wrapper.state().nameValue).toBe("");
      expect(wrapper.state().emailValue).toBe("");
      expect(wrapper.state().messageValue).toBe("");
    });
});


describe('CustomLoginForm', () => {

    // Renders a login form with username and password fields, and a submit button
    it('should render a login form with username and password fields, and a submit button', () => {
      // Arrange
      const username = '';
      const password = '';
      const onChange = jest.fn();
      const onSubmit = jest.fn();

      // Act
      render(<CustomLoginForm username={username} password={password} onChange={onChange} onSubmit={onSubmit} />);

      // Assert
      expect(screen.getByLabelText('Username')).toBeInTheDocument();
      expect(screen.getByLabelText('Password')).toBeInTheDocument();
      expect(screen.getByRole('button', { name: 'Login' })).toBeInTheDocument();
    });
});


describe('CustomLoginForm', () => {

    // Renders a login form with username and password fields, and a submit button
    it('should render a login form with username and password fields, and a submit button', () => {
      // Arrange
      const username = '';
      const password = '';
      const onChange = jest.fn();
      const onSubmit = jest.fn();

      // Act
      render(<CustomLoginForm username={username} password={password} onChange={onChange} onSubmit={onSubmit} />);

      // Assert
      expect(screen.getByLabelText('Username')).toBeInTheDocument();
      expect(screen.getByLabelText('Password')).toBeInTheDocument();
      expect(screen.getByRole('button', { name: 'Login' })).toBeInTheDocument();
    });
});


describe('CustomSignupForm', () => {

    // Renders the form with all input fields and buttons
    it('should render the form with all input fields and buttons', () => {
      // Arrange
      const username = "";
      const email = "";
      const password = "";
      const confirmPassword = "";
      const onChange = jest.fn();
      const onSubmit = jest.fn();

      // Act
      render(<CustomSignupForm
        username={username}
        email={email}
        password={password}
        confirmPassword={confirmPassword}
        onChange={onChange}
        onSubmit={onSubmit}
      />);

      // Assert
      expect(screen.getByLabelText("Username")).toBeInTheDocument();
      expect(screen.getByLabelText("Email Address")).toBeInTheDocument();
      expect(screen.getByLabelText("Password")).toBeInTheDocument();
      expect(screen.getByLabelText("Password Confirmation")).toBeInTheDocument();
      expect(screen.getByRole("button", { name: "Sign Up" })).toBeInTheDocument();
    });
});




describe('Demo', () => {

    // User selects a file and submits it for analysis, receiving a JSON response with cloudinary_path and other data
    it('should submit file for analysis and receive JSON response', () => {
      // Initialize Demo class
      const demo = new Demo();

      // Mock file object
      const file = new File(["test"], "test.png", { type: "image/png" });

      // Set state with file
      demo.setState({
        fileName: file.name,
        file: file,
        error: null,
        loading: false,
        statusCode: null,
        progress: 0,
        spinner: false,
        data: null,
      });

      // Mock handleFileUpload function
      demo.handleFileUpload = jest.fn().mockResolvedValueOnce({
        data: {
          cloudinary_path: "https://example.com/image.png",
          otherData: "..."
        },
        status: 200
      });

      // Call handleSubmit function
      demo.handleSubmit(new Event("submit"));

      // Assert that handleFileUpload was called with the file
      expect(demo.handleFileUpload).toHaveBeenCalledWith(file);

      // Assert that state is updated with the response data
      expect(demo.state.data).toEqual({
        cloudinary_path: "https://example.com/image.png",
        otherData: "..."
      });
    });
});


describe('FooterContainer', () => {

    // COMPANY
    it('should render the COMPANY section', () => {
      const wrapper = shallow(<FooterContainer />);
      expect(wrapper.find('.title-font').at(0).text()).toEqual('COMPANY');
      expect(wrapper.find('nav').at(0).find('a')).toHaveLength(4);
    });
});


describe('InviteDemoContainer', () => {

    // Renders a section with a container, flexbox, and an image.
    it('should render a section with a container, flexbox, and an image', () => {
      const wrapper = shallow(<InviteDemoContainer />);
      expect(wrapper.find('section')).toHaveLength(1);
      expect(wrapper.find('div.container')).toHaveLength(1);
      expect(wrapper.find('div.flex')).toHaveLength(1);
      expect(wrapper.find('img')).toHaveLength(1);
    });
});


describe('LandingPage', () => {

    // Renders the landing page with a video background and a 'Get started' button
    it('should render the landing page with a video background and a "Get started" button', () => {
      const landingPage = new LandingPage();
      const renderedPage = landingPage.render();
  
      // Assert that the rendered page contains a video background
      expect(renderedPage).toContain('<video src={BgVideo} autoPlay muted loop className="video-bg" />');
  
      // Assert that the rendered page contains a 'Get started' button
      expect(renderedPage).toContain('<Button primary size="huge" style={{ background: "white", color: "black", }}>Get started</Button>');
    });
});


describe('CustomLayout', () => {

    // Renders a ResponsiveContainer component with children passed as props
    it('should render ResponsiveContainer with children passed as props', () => {
      const wrapper = shallow(<CustomLayout><div>Child Component</div></CustomLayout>);
      expect(wrapper.find(ResponsiveContainer).prop('children')).toEqual(<div>Child Component</div>);
    });
});


describe('LoginForm', () => {

    // LoginForm renders without crashing
    it('should render LoginForm without crashing', () => {
      const wrapper = shallow(<LoginForm />);
      expect(wrapper.exists()).toBe(true);
    });

    // LoginForm displays error message when username is empty
    it('should display error message when username is empty', () => {
      const loginMock = jest.fn();
      const wrapper = shallow(<LoginForm login={loginMock} />);
      const form = wrapper.find(CustomLoginForm);
      form.props().onSubmit({ preventDefault: jest.fn() });
      expect(wrapper.state().formError).toBe("Please enter all the form fields");
    });

    // LoginForm redirects to "/account/studio" when authenticated
    it('should redirect to "/account/studio" when authenticated', () => {
      const loginMock = jest.fn();
      const wrapper = shallow(<LoginForm login={loginMock} authenticated={true} />);
      expect(wrapper.find(Redirect).props().to).toBe("/account/studio");
    });
});


describe('PricingContainer', () => {

    // Renders the pricing container with three pricing options
    it('should render the pricing container with three pricing options', () => {
      // Arrange

      // Act
      const wrapper = shallow(<PricingContainer />);

      // Assert
      expect(wrapper.find('.min-w-60')).toHaveLength(3);
    });
});


describe('SignupForm', () => {

    // Submitting a valid form with all fields filled in should call the 'signup' function from the 'auth' store action.
    it('should call the signup function when submitting a valid form', () => {
      // Arrange
      const signupMock = jest.fn();
      const props = {
        signup: signupMock,
        loading: false,
        error: null,
        authenticated: false
      };
      const wrapper = shallow(<SignupForm {...props} />);
      const form = wrapper.find(CustomSignupForm);

      // Act
      form.props().onSubmit({ preventDefault: jest.fn() });

      // Assert
      expect(signupMock).toHaveBeenCalledTimes(1);
    });
});


describe('StepsContainer', () => {

    // Renders the component without crashing
    it('should render the component without crashing', () => {
      const wrapper = shallow(<StepsContainer />);
      expect(wrapper.exists()).toBe(true);
    });
});

