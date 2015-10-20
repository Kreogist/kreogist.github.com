var kgenlan = new function(){
  var oBook = new function(){
    var aBannerItems = [
      ['hk', '繁體中文'],
      ['cn','简体中文'],
	  ['en','English']
    ];
    this.generate = function () {
      var sBannerContext =   "<nav>";
      for (var i = (aBannerItems.length)-1 ;i > -1 ; --i){
        sBannerContext +=
          "<li><a href=\""
          + aBannerItems[i][0]
          + "/index.html\"> <img src=\""
      + aBannerItems[i][0]
      + "/icon.png\" width=\"30\" height=\"30\"/>"
          + aBannerItems[i][1]
          + "</a></li>"
      }
      sBannerContext += "</nav>";
      return sBannerContext;
    }
  }

  this.writeLanguageList = function () {
    document.write(oBook.generate());
  };
};