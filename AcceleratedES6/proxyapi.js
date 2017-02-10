

// handler for proxy, leads to less code! :)
let doge = {
    name: 'Tenticles',
    age: 4
};

let handler = {
  get: function(target, name){
      return name in target ? target[name] : 'No existe';
  },
  set: function(target, property, value) {
      if (value.length >= 2) {
          Reflect.set(target, property, value);
      }
  }
};

var proxy = new Proxy(doge, handler);
console.log(proxy.age);
console.log(proxy.rage);
console.log(proxy.name);
proxy.name = 'N';
console.log(proxy.name);
proxy.name = 'Nixon';
console.log(proxy.name);
