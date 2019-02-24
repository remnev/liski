'use strict';

const withStylus = require('@zeit/next-stylus')

module.exports = withStylus({
  exportPathMap: function () {
    return {
      '/': { page: '/' }
    }
  }
});
