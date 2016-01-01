module.exports = function(grunt) {

  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),
	
	// configure jshint to validate js files -----------------------------------
		jshint: {
		  options: {
			reporter: require('jshint-stylish')
		  },
		  all: ['Grunfile.js', 'public/js/**/*.js', 'public/data/*.js', 'public/js/**/*.js', 'public/main/**/*.js']
		},
		
	// configure uglify to minify js files -------------------------------------
		uglify: {
		  options: {
			banner: '/*\n <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> \n*/\n'
		  },
		  build: {
			files: {
			  'public/magic.min.js': ['public/js/**/*.js', 'public/aasets/**/*.js', 'public/data/*.js', 'public/js/**/*.js', 'public/main/**/*.js']
			}
		  }
		},
		  
		// configure watch to auto update ------------------------------------------
		watch: {
		  scripts: {
			files: ['public/js/**/*.js', 'public/data/*.js', 'public/js/**/*.js', 'public/main/**/*.js'],
			tasks: ['jshint', 'uglify']
		  }
		}
		
  });
  
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // ============= // CREATE TASKS ========== //
  grunt.registerTask('default', ['jshint', 'uglify']); 
};