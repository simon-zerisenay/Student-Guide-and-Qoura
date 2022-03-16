module.exports = function (grunt) {

    grunt.initConfig({

        clean: {
            after: {
                src: ["Gruntfile.js"]
            }
        },
        uglify: {
            build: {
                expand: true,
                src: ['**/*.js','!libs/ms_sdk_bundle/EventEmitter.js','!**/*.min.js','!node_modules/**','!Gruntfile.js']
            }
        },

        cssmin: {
            build: {
                expand: true,
                src: ['**/*.css','!**/*.min.css']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-clean');

    grunt.registerTask('build_release_and_clean', [
        'uglify',
        'cssmin',
        'clean:after'
    ]);
};
