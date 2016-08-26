// For default application configuration.
const configure = require('../../config/application.js');
// Import for needed packages.
const loginPage = require('../../src/LoginPage');
const confirmNoIP = require('../../src/ConfirmNoIP');

describe('no-ip host validation', () => {
  let link;

  beforeEach(() => {
    configure.configureDefault(false);
  });

  it('has to login into a gmail account', () => {
    console.info('\nit: has to login into a gmail account.');

    browser.get(browser.params.baseUrlGmail).then(() => {
      loginPage.loginAs(browser.params.username, browser.params.password, browser.params.loginEndPoint);
    });
  });

  it('has to open the noip site to confirm that it is not a robot', () => {
    console.info('\nit: has to open the noip site to confirm that it is not a robot.');

    confirmNoIP.clickEmailLink();
      confirmNoIP.clickConfirmHostname()
      .then((att) => {
        link = att;
        // expectations.
      })
      .catch((err) => {
        console.error('It was an error getting the link', link, err);
      });
  });

  it('has to browse till no-ip site, and confirm over the "No thanks" link', () => {
    console.info('\nit: has to browse till no-ip site, and confirm over the "No thanks" link.');

    browser.get(link)
      .then(() => {
        confirmNoIP.clickNoThanksLink().then(() => {
          // expectations.
        });
      });
  });

  it("should click and confirm the recaptcha", () => {
    console.info('\nit: should click and confirm the recaptcha.');

    confirmNoIP.clickRecaptcha().then(() => {
      confirmNoIP.recaptchaButton().then(() => {
        // expectations.
      });
    });
  });

});
