var webpackConfig = require('./webpack.test.js');
var helpers = require('./webpack-config/helpers');

module.exports = function(config) {
    config.set({
        basePath: '',

        frameworks: ['jasmine'],

        files: [{
            pattern: './webpack-config/karma-test-shim.js',
            watched: false
        }],

        preprocessors: {
            './webpack-config/karma-test-shim.js': ['webpack', 'sourcemap']
        },

        webpack: webpackConfig,

        webpackMiddleware: {
            stats: 'errors-only'
        },

        webpackServer: {
            noInfo: true
        },

        reporters: ['progress'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: false,
        singleRun: true,
        browsers: ['Chrome'],

        browserConsoleLogOptions: {
            level: "debug",
            format: "%b %T: %m",
            terminal: true
        },
        
    });
};
