/**
 * Grunt config for frontend project boilerplate with Grunt
 * @author Rifki Fahrurozi
 */
module.exports = function (grunt) {
  grunt.initConfig({
    concat: {},
    sass: {
      dist: {
        options: {
          style: "compressed",
        },
        files: {
          "dist/css/outputNameFile.css": "src/scss/inputNameFile.scss", // only sample. please replace with existing file.
        },
      },
    },
    watch: {
      srcipts: {
        files: ["src/scss/*.scss"],
        tasks: ["sass"],
      },
    },
  });

  // Load plugin task
  grunt.loadNpmTasks("grunt-contrib-concat");
  grunt.loadNpmTasks("grunt-contrib-sass"); // please refer to this doc: https://www.npmjs.com/package/grunt-contrib-sass
  grunt.loadNpmTasks("grunt-contrib-watch");

  // Default tasks
  grunt.registerTask("default", ["watch"]);
};
