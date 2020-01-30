function createLib (execlib) {
  return {
    mixins: {
      service: require('./service')(execlib)
    },
    visiblefields: {
      user: require('./visiblefields/user')
    }
  }
}

module.exports = createLib;
