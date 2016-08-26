const LoginPage = function() {

  this.usernamelocator = 'Email';
  this.passwordlocator = 'Passwd';
  this.nextButtonLocator = 'next';
  this.submitButtonLocator = 'signIn';

  this.waitLogin = (endpoint) => {
    // Login takes some time, so wait until it's done.
    // For the test app's login, we know it's done when it redirects to 'endpoint'.
    // eg: https://example.co.nz/endpoint
    browser.driver.wait(() => {
      return browser.driver.getCurrentUrl().then(function(url) {
        const re = new RegExp(endpoint);

        return re.test(url);
      });
    });
  };

  // The login page allows the user to type their username into the username field
  this.typeUsername = (username) => {
    // var un = element(by.css(this.usernamelocator));
    var un = element(by.id(this.usernamelocator));

    // This is the only place that "knows" how to enter a username
    un.sendKeys(username);

    expect(un.getAttribute('value')).toEqual(username);
  };

  // The login page allows the user to type their password into the password field
  this.typePassword = (password) => {
      // var pwd = element(by.css(this.passwordlocator));
      var pwd = element(by.id(this.passwordlocator));

      // This is the only place that "knows" how to enter a password
      pwd.sendKeys(password);
      
      expect(pwd.getAttribute('value')).toEqual(password);
  };

  // The login page allows the user to submit the login form
  this.submitLogin = () => {
      // This is the only place that submits the login form and expects the destination to be the home page.
      // A seperate method should be created for the instance of clicking login whilst expecting a login failure.
      // element(by.css(this.submitButtonLocator)).click();
      element(by.id(this.submitButtonLocator)).click();
  };

  // The login page allows the user to click on the next button of the form
  this.clickNext = () => {
      element(by.id(this.nextButtonLocator)).click();
  };

  // The login page allows the user to submit the login form knowing that an invalid username and / or password were entered
  this.submitLoginExpectingFailure = () => {
      // This is the only place that submits the login form and expects the destination to be the login page due to login failure.
      // element(by.css(this.submitButtonLocator)).click();
      element(by.id(this.submitButtonLocator)).click();
  };

  /**
   * <p>Conceptually, the login page offers the user the service of being able to "log into"
   * the application using a user name and password.</p>
   *
   * @param  String username User name
   * @param  String password User password
   * @param  String endpoint End point to check when the page is loaded.
   */
  this.loginAs = (username, password, endpoint) => {
    this.typeUsername(username);
    this.clickNext();
    this.typePassword(password);
    this.submitLogin();
    this.waitLogin(endpoint);
  };
};

module.exports = new LoginPage();
