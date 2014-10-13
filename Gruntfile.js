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
        files: ['{src,test}/**/*.js'],
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
          cwd: 'src/',
          src: ['**/*.js'],
          dest: 'dest/src'
        },{
          expand: true,
          cwd: 'test/',
          src: ['**/*.js'],
          dest: 'dest/test'
        }]
      }
    },

    shell: {
      jasmine: {
        command: 'node_modules/.bin/jasmine-node dest/test'
      }
    }
  });

  grunt.registerTask('test', ['shell:jasmine']);
  grunt.registerTask('build', ['traceur']);
};
