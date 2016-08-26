const Environment = {
  development: {
    BASE_URL: 'http://localhost:8080',
    BASE_URL_GMAIL: 'https://accounts.google.com/ServiceLogin?service=mail&passive=true&rm=false&continue=https://mail.google.com/mail/&ss=1&scc=1&ltmpl=default&ltmplcache=2&emr=1&osid=1#identifier',
    LOGIN_END_POINT: '#inbox'
  },
  production: {
    BASE_URL: 'http://localhost:8080',
    BASE_URL_GMAIL: 'https://accounts.google.com/ServiceLogin?service=mail&passive=true&rm=false&continue=https://mail.google.com/mail/&ss=1&scc=1&ltmpl=default&ltmplcache=2&emr=1&osid=1#identifier',
    LOGIN_END_POINT: '#inbox'  
  }
};

module.exports = Environment;
