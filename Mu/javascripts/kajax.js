var kJumper = new function() {
  // page jumper
  var http_request = false,//Object for HTTPRequesting
      nextContext,         //container to recieve Data of next page
      presentContext,      //container to show
      rRoot = new RegExp(".*(?=\/)"),// Matches root of url
      root = '',//root of url
      kJumperLinks;

  function timeStamp(){
    return (new Date()).toTimeString() + ":";
  }

  function getKJumperLinks(){
    return ( Array.prototype.slice.call( document.querySelectorAll('.kjumper-link') ) );
  }

  function setRequestReciever() {
    nextContext    = document.querySelector(".kjumper-container.inactive");
    presentContext = document.querySelector(".kjumper-container.active");
  }
  function swapRequestReciever() {
    classie.remove(nextContext,'inactive');
    classie.add(presentContext,'inactive');
    classie.add(nextContext,'active');
    classie.remove(presentContext,'active');
  }


  function bindKJumperLinks(){
    kJumperLinks = getKJumperLinks();
    for( var i = 0;i< kJumperLinks.length ;i++){
      (function(i){
        var j = i;
          kJumperLinks[j].setAttribute("onclick","javascript:kJumper.jump(this);");
      })(i)
      };
    }

  function makeRequest( url ) {
    if(http_request) {
      http_request.abort();
      http_request = false;
    }

    if (window.XMLHttpRequest) { // Mordern browser
      http_request = new XMLHttpRequest();
      if (http_request.overrideMimeType) {
        http_request.overrideMimeType('text/plain');
      }
    } else if (window.ActiveXObject) {// IE
      try {
        http_request = new ActiveXObject('Msxml2.XMLHTTP');
      } catch (e) {
        try {
          http_request = new ActiveXObject();
        } catch (e) {}
      }
    }

    if (!http_request) { // request create failed
      console.log( timeStamp() + 'Ahooo,Cannot create an XMLHTTP instance');
      return false;
    }

    http_request.onreadystatechange = Ajiii;
    http_request.open('GET',url,true);
    http_request.send(null);
  }

  function parseURL () {
    var splitter = window.location.href.lastIndexOf("#");
    if ( splitter == -1 ) {
      makeRequest( root + "index_content.html" );
    }
    else {
      makeRequest( root + kdevgen.urlToFilename(window.location.href.substring(splitter+1)) );
    }
  }

    function Ajiii() {
      if (http_request.readyState == 4) { // Ready OK
        if (http_request.status == 200) { // Respongse OK
          nextContext.innerHTML = http_request.responseText;

          swapRequestReciever();
          setRequestReciever();
          bindKJumperLinks();
        } else {
          console.log( timeStamp() + 'Oho,Loading failed');
        }
      }
    }

    this.init = function() {
      root = rRoot.exec(window.location).toString() + '/'; //get root of URL
      setRequestReciever();
      bindKJumperLinks();
      parseURL();
      window.addEventListener('hashchange',parseURL);
    }

    this.jump = function(el) {
      document.title = el.getAttribute('data-title');
    }
}
