var program = function() {
  async.series([
    function(callback){
      setTimeout(function(){
        turnSelector(-1);
        callback(null);
      }, 1000);
    },
    function(callback){
      setTimeout(function(){
        turnSelector(-2);
        callback(null);
      }, 1000);
    },
    function(callback){
      setTimeout(function(){
        turn(1);
        callback(null);
      }, 1000);
    },
    function(callback){
      setTimeout(function(){
        turn(2);
        callback(null);
      }, 1000);
    },
    function(callback){
      setTimeout(function(){
        turn(3);
        callback(null);
      }, 1000);
    },
    function(callback){
      setTimeout(function(){
        turn(-1);
        callback(null);
      }, 1000);
    },
    function(callback){
      setTimeout(function(){
        turn(-3);
        callback(null);
      }, 1000);
    },
    function(callback){
      setTimeout(function(){
        turn(-2);
        callback(null);
      }, 1000);
    },
    function(callback){
      setTimeout(function(){
        turnSelector(-1);
        callback(null);
      }, 1000);
    },
    function(callback){
      setTimeout(function(){
        turnSelector(-2);
        callback(null);
      }, 1000);
    },
    function(callback){
      setTimeout(function(){
        turnSelector(6);
        callback(null);
      }, 1000);
    }
  ],
  function(err, results){
    program();
  });
}