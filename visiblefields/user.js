//module.exports = ['haveChat'];
function haver (thingy) {
  return 'have'+thingy;
}
module.exports = function (realms) {
  return realms.map(haver);
}
