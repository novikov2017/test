module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
  htmlmin: {                                     // Task
    dist: {                                      // Target
      options: {                                 // Target options
        removeComments: true,
        collapseWhitespace: true
      },
      files: {                                   // Dictionary of files
        'indexMain.html': 'index.html',     // 'destination': 'source'
        
      }
    },
    dev: {                                       // Another target
      files: {
        
      }
    }
  }
});

  // Load the plugin that provides the "uglify" task.
 
  grunt.loadNpmTasks('grunt-contrib-htmlmin');

  // Default task(s).
  grunt.registerTask('default', ['htmlmin']);

};