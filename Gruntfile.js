module.exports = function(grunt){

	require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);

	var sassStyle = 'expanded';


    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

	    concat: {
	      options: {
	        
	      },
	      dist: {
	        src: ['js/myjs.js', 'js/myjs-team.js'],
	        dest: 'build/global.js',
	      },
	    },

	    jshint: {
	      all: ['js/myjs-team.js', 'js/myjs.js']
	    },

	    uglify: {
		    build: {
		        files: {
		        	'js/myjs.min.js': ['js/myjs.js'],
		            'js/myjs-team.min.js': ['js/myjs-team.js']

		        }
		    }
		},

        htmlhint: {
		    build: {
		        options: {
		            'tag-pair': true,
		            'tagname-lowercase': true,
		            'attr-lowercase': true,
		            'attr-value-double-quotes': true,
		            'doctype-first': true,
		            'spec-char-escape': true,
		            'id-unique': true,
		            'head-script-disabled': true,
		            'style-disabled': true
		        },
		        src: ['index.html']
		    }
		},

		sass: {
			output : {
		        options: {
		          style: sassStyle
		        },
		        files: {
		        	'css/mycss.css': 'scss/mycss.scss',
		        	'css/myanim.css': 'scss/myanim.scss',
		        	'css/mycss-team.css': 'scss/mycss-team.scss'

		        }
		      }
    	},


		watch: {
		    html: {
		        files: ['index.html', 'team.html'],
		        tasks: ['htmlhint']
		    },

		    js: {
		        files: ['js/myjs.js', 'js/myjs-team.js'],
		        tasks: ['jshint','uglify']
		    },

		    scss:{
		    	files: ['scss/*.scss'],
		        tasks: ['sass']
		    }
		},




    });

    var watchList = ['watch'];
    var compressjsList = ['jshint','uglify']; 

    grunt.registerTask('watchit', watchList);
    grunt.registerTask('compressjs', compressjsList);
    grunt.registerTask('outputcss',['sass']);
    grunt.registerTask('default');



};