module.exports = {
  autoprefixer: {
    browsers: [
      'last 3 version',
      'ie >= 10',
    ]
  },
  plugins: [
    require('autoprefixer')()
  ]
};