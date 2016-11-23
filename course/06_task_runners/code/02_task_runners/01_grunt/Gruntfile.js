module.exports = function(grunt) {

    grunt.initConfig({
        concat: {
            js: {
                src: [
                    'node_modules/jquery/dist/jquery.js',
                    'node_modules/bootstrap/dist/js/bootstrap.js',
                    'index.js'
                ],
                dest: 'build/app.js'
            },
            css: {
                src: [
                    'node_modules/bootstrap/dist/css/bootstrap.css',
                    'app.css'
                ],
                dest: 'build/style.css'
            }
        },
        clean: {
            build: [
                'build'
            ]
        },
        connect: {
            server: {
                options: {
                    port: 8080,
                    hostname: '*',
                    keepalive: true,
                    livereload: true
                }
            }
        },
        uglify: {
            js: {
                files: {
                    'build/app.min.js': ['build/app.js']
                }
            }
        },
        cssmin: {
           target: {
                files: {
                    'build/style.min.css': ['build/style.css']
                }
            }
        },
        processhtml: {
            dist: {
                files: {
                    'build/index.html': ['index.html']
                }
            }
        },
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-processhtml');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-clean');

    grunt.registerTask('build', [
        'clean:build',
        'concat',
        'uglify',
        'cssmin',
        'processhtml:dist'
    ]);
};