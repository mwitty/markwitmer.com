const path = require('path');

module.exports = {
    entry: './app.js',
    output: {
        path: __dirname+'./../dist',
        filename: 'main-dist.js'
      },
      watch: true,
}