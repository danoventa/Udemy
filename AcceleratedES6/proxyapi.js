

// Proxy for flow control
function log(message){
    console.log('Log entry created, message: ' + message);
}

let handla = {
    apply: function(target, thisArg, argumentsList){
        if(argumentsList.length == 1){
            return Reflect.apply(target, thisArg, argumentsList);
        }
    }
};

let peroxide = new Proxy(log, handla);
peroxide("holla");
peroxide("holla", 1);

// proxies, functions and prototypes can be wrapped with proxys
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
