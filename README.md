# Automated scripts
Automated scripts repository using Protractor, Jasmine, Selenium Webdriver and Grunt.

## no-ip
Validate your host, opening your gmail account, browsing until the no-ip website and confirming the recaptcha.

## Note
A file named `./config/secret` has to be created for google credentials, using below format:

```
module.exports = Object.freeze({
  username: 'username@gmail.com',
  password: 'password'
});
```
