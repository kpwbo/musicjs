module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['requirejs', 'qunit'],
    files: [
      'test-main.js',
      { pattern: 'dist/browser/**/*.js', included: false }
    ],
    exclude: [
    ],
    preprocessors: {
      'dist/browser/**/*.js': ['coverage']
    },
    reporters: ['progress', 'coverage'],
    browsers: ['Chrome'],
    singleRun: true
  });
};
