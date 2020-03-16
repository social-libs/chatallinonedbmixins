function createServiceMixin (execlib) {
  'use strict';

  var lib = execlib.lib;

  function ChatAllInOneDBServiceMixin () {
  }
  ChatAllInOneDBServiceMixin.prototype.destroy = lib.dummyFunc;

  //static
  function chatadder (result, chatname) {
    if (lib.isString(chatname) && chatname.length>0) {
      result.push({
        modulename: 'social_chatservice',
        instancename: chatname,
        propertyhash: {
          chatdbpath: chatname+'.db'
        }
      });
    }
    return result;
  }

  ChatAllInOneDBServiceMixin.servicesToStartStatically = function (options) {
    var ret = [];
    if (options && lib.isArray(options.chats)) {
      options.chats.reduce(chatadder, ret);
    }
    return ret;
  };

  ChatAllInOneDBServiceMixin.addMethods = lib.dummyFunc;

  return ChatAllInOneDBServiceMixin;
}

module.exports = createServiceMixin;
