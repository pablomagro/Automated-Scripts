/**
 * Name: constants.js
 * Description: Constants programs.
 * Created by: Pablo Magro
 * Date: 19/08/2016
 */

const config = require('./common').config();

module.exports = Object.freeze({
  // Applicaton base URL.
  baseUrl: config.BASE_URL,
  baseUrlGmail: config.BASE_URL_GMAIL,
  loginEndPoint: config.LOGIN_END_POINT
});
