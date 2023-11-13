describe('DesktopContainer', () => {

    // Renders a responsive Semantic UI React menu with a logo and links to Home, Demo, Login, and Signup pages
    it('should render a responsive menu with logo and links', () => {
      // Initialize DesktopContainer
      const wrapper = shallow(<DesktopContainer />);
  
      // Assert that the menu component is rendered
      expect(wrapper.find(Menu)).toHaveLength(1);
  
      // Assert that the logo image is rendered
      expect(wrapper.find(Image)).toHaveLength(1);
  
      // Assert that the links to Home, Demo, Login, and Signup pages are rendered
      expect(wrapper.find(Menu.Item)).toHaveLength(4);
    });

    // Handles the case when the window is scrolled and changes the menu to fixed or not fixed
    it('should handle window scroll and change menu to fixed or not fixed', () => {
      // Initialize DesktopContainer
      const wrapper = shallow(<DesktopContainer />);
  
      // Simulate window scroll event
      wrapper.instance().showFixedMenu();
  
      // Assert that the state 'fixed' is set to true
      expect(wrapper.state('fixed')).toBe(true);
  
      // Simulate window scroll event reverse
      wrapper.instance().hideFixedMenu();
  
      // Assert that the state 'fixed' is set to false
      expect(wrapper.state('fixed')).toBe(false);
    });
});


describe('MobileContainer', () => {

    // Renders the component with default props
    it('should render the component with default props', () => {
      const wrapper = shallow(<MobileContainer />);
      expect(wrapper).toMatchSnapshot();
    });
});
