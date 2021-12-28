 function receivesAFunction(callback){
    callback();
  }
  
  function returnsANamedFunction() {
    return function namedFunction() {};
    return sayHello();
  }

  function returnsAnAnonymousFunction(){
    return function(){
    }
  }