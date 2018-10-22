'use strict';

var obj1 = {
  count: 11,
  name: 'aaa'
};

var obj = new Proxy(obj1, {
  get: function get(target, key, receiver) {
    console.log('getting ' + key + '!');
    return Reflect.get(target, key, receiver);
  },
  set: function set(target, key, value, receiver) {
    console.log('setting ' + target + '!');
    console.log(target);
    return Reflect.set(target, key, value, receiver);
  }
});
obj.count = 1;
obj1.count = 99;