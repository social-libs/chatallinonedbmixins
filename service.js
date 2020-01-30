function createServiceMixin (execlib) {
  'use strict';

  var lib = execlib.lib;

  function ChatAllInOneDBServiceMixin () {
  }
  ChatAllInOneDBServiceMixin.prototype.destroy = lib.dummyFunc;

  //static
  ChatAllInOneDBServiceMixin.servicesToStartStatically = [{
    //modulename: 'social__data_chatservice',
    modulename: 'social_chatservice',
    instancename: 'Chat',
    propertyhash: {
    }
  }];

  ChatAllInOneDBServiceMixin.addMethods = lib.dummyFunc;

  return ChatAllInOneDBServiceMixin;
}

module.exports = createServiceMixin;
