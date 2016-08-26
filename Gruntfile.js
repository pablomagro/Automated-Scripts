module.exports = function (grunt) {
  'use strict';

  // Require it at the top and pass in the grunt instance
  require('time-grunt')(grunt);

  // Project configuration
  grunt.initConfig({
      // Metadata
      pkg: grunt.file.readJSON('package.json'),
      // Task configuration
      jshint: {
        files: [
          'e2e_conf.js',
          'Gruntfile.js',
          'config/*.js',
          'specs/*.js',
          'page/*.js',
          'components/*.js',
          'src/*.js'
        ],
        options: {
          'jshintrc': '.jshintrc'
        },
        gruntfile: {
          src: 'Gruntfile.js'
        }
      },
      shell: {
        options: {
          stderr: true
        },
        development: {
          command: 'npm run test-all-dev'
        },
        production: {
          command: 'npm run test-all-prod'
        }
      }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-selenium-webdriver');
  grunt.loadNpmTasks('grunt-shell');

  // Default task.
  grunt.registerTask('default', ['jshint']);

  // Development tests.
  grunt.registerTask('development', 'run development tests', [
    'jshint',
    'selenium_start',
    'shell:development',
    'selenium_stop'
  ]);

  // Production tests.
  grunt.registerTask('production', 'run production tests', [
    'jshint',
    'selenium_start',
    'shell:production',
    'selenium_stop'
  ]);
};
