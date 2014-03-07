
module.exports = function(grunt) { 
	
	grunt.initConfig({
		//pkg: grunt.file.readJSON('package.json'),

		jshint: {
      		options: {
				globals: { 
					_: false, // Lo-Dash
					$: false, // JQuery
					// Jasmine
					jasmine: false, 
					describe: false, 
					it: false, 
					expect: false, 
					beforeEach: false
				},
				browser: true, 
				devel: true
			},
			all: ['src/**/*.js', 'test/**/*.js']
		},

		jasmine: {
			options: {
				specs: ['test/**/*.js'],
				vendor: [
		            'node_modules/lodash/lodash.js',
		            'node_modules/jquery/dist/jquery.js'
				]
			},
			unit: {
				src: 'src/**/*.js'
			}
		},

		watch: {
			all: {
				files: ['src/**/*.js', 'test/**/*.js'],
				tasks: ['default']
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-jasmine'); 
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('default', ['jshint', 'jasmine']);
};
