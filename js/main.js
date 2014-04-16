//dimensions translator
  var width  = document.documentElement.clientWidth;
  var height = document.documentElement.clientHeight;

  var translateX = function(size){
      return (width / 100) * size;
  }
  var translateY = function(size){
      return (height / 100) * size;
  }

//constants
	var HEIGHT = translateY(10);

//prepare
  var main = document.getElementById('main');
  main['data-top'] = 0;

  var selector = document.getElementById('selector');
  selector['data-top'] = 0;
  selector.style.height = HEIGHT + 'px';

  //generate elements
  (function() {
    var elements = [];
    for(var i = 0; i < 100; i++){
      var img     = document.createElement('img');
      img.src     = 'img/img.png';
      var span1   = document.createElement('span');
      var span2   = document.createElement('span');
      var span3   = document.createElement('span');
      span2.className = 'first';
      span1.className = 'second';
      span3.className = 'third';
      span2.innerText = 'Text ' + i;
      span1.innerText = 'Text ' + i;
      span3.innerText = 'Text ' + i;

      var element = document.createElement('div');
      element.style.height = HEIGHT + 'px';
      element.appendChild(img);
      element.appendChild(span1);
      element.appendChild(span2);
      element.appendChild(span3);
      main.appendChild(element);
    }
  })();

  program();