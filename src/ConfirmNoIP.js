// Constants.
const confirmhostnameTextLocator = 'Confirm Hostname';
const confirmhostnameCssLocator = '.button.pull-left';
const recaptchacheckboxCssLocator = '.recaptcha-checkbox-checkmark';
const nothanksTextLocator = 'No thanks, just renew my free hostname';
const pleaseconfirmhostnamenowCssLocator = '.zA.yO';
const pleaseconfirmhostnamenowTextLocator = 'Please confirm your hostname now or it will be deleted';

const ConfirmNoIP = function() {
  // The login page allows the user to click on the next button of the form.
  this.clickEmailLink = () => {
    const confirm = element(by.cssContainingText(pleaseconfirmhostnamenowCssLocator, pleaseconfirmhostnamenowTextLocator));

    return Promise.resolve(confirm.click());
  };

  // Click over the link 'No thanks, just renew my free hostname' within the noip page.
  this.clickNoThanksLink = () => {
    const elem = element(by.linkText(nothanksTextLocator));

    return Promise.resolve(elem.click());
  };

  // Click over the recaptcha checkbox.
  this.clickRecaptcha = () => {
    // switchTo the iframe where the recaptcha is located.
    return browser.switchTo().frame(0).then(() => {
      browser.executeScript('arguments[0].click()', browser.driver.findElement(By.css(recaptchacheckboxCssLocator)));
    });
  };

  // Click over the button with the text 'Confirm your hostname now'.
  this.recaptchaButton = () => {
    const confirm = element(by.cssContainingText(confirmhostnameCssLocator, confirmhostnameTextLocator));

    return Promise.resolve(confirm.click());
  };

  // Return a promise a the no-ip link .
  this.clickConfirmHostname = () => {
    return new Promise(function(resolve, reject) {
      const confirmHostname = element(by.linkText(confirmhostnameTextLocator));

      confirmHostname.getAttribute('href')
        .then((att) => {
          resolve(att);
        })
        .catch((err) => {
          reject(err);
        });
    });
  };
};

module.exports = new ConfirmNoIP();
