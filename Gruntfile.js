module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: ['bower_components/jquery/dist/jquery.js','public/javascripts/src/*.js'],
        dest: 'public/javascripts/build/main.min.js'
      }
    },
    jshint: {
      all: ['Gruntfile.js', 'public/javascripts/src/*.js', 'test/**/*.js', 'routes/*.js']
    },
    less: {                              // Task
      development: {                            // Target
        options: {                       // Target options
          compress: true,
         yuicompress: true,
         optimization: 2
        },
        files: {                         // Dictionary of files
          'public/stylesheets/build/main.css': 'public/stylesheets/src/main.less'      // 'destination': 'source'
           //,'public/stylesheets/build/print.less': 'public/stylesheets/src/print.less'
        }
      }
  },
  watch: {
    scripts: {
      files: ['public/stylesheets/src/*.less','public/javascripts/*/*.js','Gruntfile.js'],
     // tasks: ['jshint','sass','uglify'],
        tasks: ['jshint','less'],

      options: {
        spawn: false,
        },
      },
    },
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  grunt.registerTask('default', ['uglify','jshint','less']);

};
