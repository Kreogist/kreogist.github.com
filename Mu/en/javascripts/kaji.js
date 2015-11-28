var kaji = new function(){
  var oBook = new function(){
    var aBannerItems = [
      ['μ','index.html'],
      ['Features','features.html'],
      ['Downloads', 'downloads.html'],
      ['Developers', 'developers/index.html'],
      ['Support', 'support.html'],
	  ['Donate', 'donate.html']
    ];
    this.generate = function (sPrefix, sCurrentFilename) {
      var sBannerContext = "<div id=\"header\">"
                           + "<nav>"
                           + "<li class=\"icon\"><img src=\""
                           + sPrefix
                           + "../images/kreogist.png\" "
                           + "onclick=\"javascript:window.location='http://kreogist.github.io/'\"/></li>"
                           + "<li class=\"cat\"><a href=\"https://github.com/Kreogist/Mu\">Github</a></li>";
      for (var i = (aBannerItems.length)-1 ;i > -1 ; --i){
        sBannerContext +=
          "<li class=\"cat"
          + ((aBannerItems[i][1] == sCurrentFilename) ? " active" : "")
          + "\"><a href=\""
          + sPrefix
          + aBannerItems[i][1]
          + "\">"
          + aBannerItems[i][0]
          + "</a></li>"
      }
      sBannerContext += "<li id=btn-menu></li>"
                      + "</nav>"
                      + "</div><!-- end header -->";
      return sBannerContext;
    }
  }

  this.writeBanner = function (sPrefix, sCurrentFilename) {
    document.write(oBook.generate(sPrefix, sCurrentFilename));
    //add responsive event to header,orz I know this is a little crazy...
    (function(h,t,m){
      h.addEventListener( "click", function(e){
                                    event = e || window.event;// stop Propagation
                                    if (event.stopPropagation) {event.stopPropagation();} // W3c
                                    else {event.cancelBubble = true;} //IE<9
                                    classie.toggle( h, 'active' );
                                  });
      t.addEventListener( "click", function(){classie.remove(h, 'active');});
      m.addEventListener( "click", function(e){
                                    event = e || window.event;// stop Propagation
                                    if (event.stopPropagation) {event.stopPropagation();} // W3c
                                    else {event.cancelBubble = true;} //IE<9
                                    classie.toggle( h, 'active' );
                                    } );
    })( document.querySelector( "#header>nav" ),
        document.querySelector( "body" ),
        document.querySelector( "#btn-menu" )
    );

  };
  this.writeFooter = function (sPrefix) {
  document.write("<hr />"+
            "<span class=\"credits left\">"+
            "  Copyright © 2013-2014 <a href=\"https://github.com/Kreogist\">Kreogist Dev Team</a><br />"+
            "All other trademarks are the property of their respective owners. Hosted on GitHub Pages."+
            "</span>"+
            "<span class=\"credits right\">"+
      "<a href=\""+
      sPrefix +
      "../choose-language.html\"><img src=\""+ sPrefix +"icon.png\" width=\"30\" height=\"30\"/></a>"+
      "</span>");
  };
};
