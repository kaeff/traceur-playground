'use strict';

module.exports = function (grunt) {

  // Load grunt tasks automatically
  require('load-grunt-tasks')(grunt);

  // Define the configuration for all the tasks
  grunt.initConfig({

    packageJson: require('./package.json'),

    // Watches files for changes and runs tasks based on the changed files
    watch: {
      traceur: {
        files: ['{src,test}/es6/**/*.js'],
        tasks: ['traceur', 'test']
      },
      gruntfile: {
        files: ['Gruntfile.js']
      },
    },

    traceur: {
      options: {
        // traceur options here
          modules: 'commonjs'
      },
      custom: {
        files: [{
          expand: true,
          cwd: 'src/es6',
          src: ['*.js'],
          dest: 'src/es5'
        },{
          expand: true,
          cwd: 'test/es6',
          src: ['*.js'],
          dest: 'test/es5'
        }]
      }
    },

    shell: {
      jasmine: {
        command: 'node_modules/.bin/jasmine-node test/es5'
      }
    }
  });

  grunt.registerTask('test', ['shell:jasmine']);
};
