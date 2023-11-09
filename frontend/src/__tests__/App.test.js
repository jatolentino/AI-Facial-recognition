describe('App', () => {

    // App component renders without errors
    it('should render without errors', () => {
      const wrapper = shallow(<App />);
      expect(wrapper.exists()).toBe(true);
    });

    // onTryAutoSignup function is not defined
    it('should call onTryAutoSignup function', () => {
      const onTryAutoSignup = jest.fn();
      shallow(<App onTryAutoSignup={onTryAutoSignup} />);
      expect(onTryAutoSignup).toHaveBeenCalled();
    });
});
