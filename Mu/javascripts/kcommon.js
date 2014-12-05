var parallaxIt = new function(){

  var foreLayer,
      backLayer;

  function onScroll(e){
    var Y = window.pageYOffset;
    backLayer.style.backgroundPosition = " 0 -" + Y*0.6 + "px";
    foreLayer.style.backgroundPosition = " 0 -" + Y*0.8 + "px";
  }

  this.init = function() {
    foreLayer = document.getElementById("parallax-fore");
    backLayer = document.body;
    window.addEventListener("scroll",onScroll);
  };

}
