var kgendonwload = new function(){
  var oLinkGenerator = new function(){
    var lPlatformText = [
      'Windows',
      'Mac OS X',
      'Linux'
    ];
    var lServerList = [
      'Github',
      'Dbank',
      'Baidu',
      'SourceForge'
    ];
    var lPackageType = [
        'zip',
        '7z',
        'app.zip',
        'deb'
    ];
    var lPackageSize = [
        '37.4 MB',
        '27.7 MB',
        '35.2 MB',
        '1.2 MB'
    ];
    var lAvailablePackageType =[
        [1, 1, 0, 0],
        [0, 0, 1, 0],
        [0, 0, 0, 1]
    ];
    var lDownloadLinks = [
        ['', 'http://dl.vmall.com/c0wqcvaa4c', 'http://pan.baidu.com/s/1i3w0tTV', 'http://sourceforge.net/projects/kreogist-mu/files/Releases/0.6/Windows/mu_0.6_3af723e.zip/download'],
        ['', 'http://dl.vmall.com/c09zfb8n6y', 'http://pan.baidu.com/s/1bnuAGsZ', 'http://sourceforge.net/projects/kreogist-mu/files/Releases/0.6/Windows/mu_0.6_3af723e.7z/download'],
        ['', 'http://dl.vmall.com/c0ntv7n0uo', 'http://pan.baidu.com/s/1bn2IjNp', 'http://sourceforge.net/projects/kreogist-mu/files/Releases/0.6/Mac/mu_0.6_3af723e.app.zip/download'],
        ['', 'http://dl.vmall.com/c0m9lc3h6b', 'http://pan.baidu.com/s/1hqmtcDu', 'http://sourceforge.net/projects/kreogist-mu/files/Releases/0.6/Linux/mu_0.6.3_amd64.deb/download']
    ];

    this.getPackageSize = function(type) {
        for (var i = 0; i < lPackageType.length ; ++i){
            if(lPackageType[i] === type) {
                return lPackageSize[i];
            }
        }
    };

    this.getDownloadLink = function(type, server) {
        for (var i = 0; i < lPackageType.length ; ++i){
            if(lPackageType[i] === type)
            {
                for (var j = 0; j < lServerList.length ; ++j){
                    if(lServerList[j] === server) {
                        return lDownloadLinks[i][j];
                    }
                }
            }
        }
    };

    this.generate = function () {
      //Add platforms.
      var sLinkSheetContext = '<section id="download-tabs">';
      for (var i = 0 ;i < lPlatformText.length ; ++i){
        sLinkSheetContext +=
          '<span id="download-tab'
          + (i+1)
          + '"'
        if(i == 0){
            sLinkSheetContext += ' class="active" '
        }
        sLinkSheetContext += '>'
                +lPlatformText[i]
          + '</span>'
      }
      sLinkSheetContext += '</section><section id="download-links">';
      for(i = 0; i< lPlatformText.length ; ++i){
            sLinkSheetContext += '<section id="download-links'+
            + (i+1)
            +'"'
            if(i == 0){
                sLinkSheetContext += ' class="active"'
            }
            sLinkSheetContext += '>'
            var iAvailableType=0;
            for(var j = 0; j<lPackageType.length ; ++j){
                iAvailableType+=lAvailablePackageType[i][j];
            }
            if(iAvailableType>0){
                sLinkSheetContext += '<table><thead><tr>'
                for(j = 0; j<lServerList.length ; ++j){
                    sLinkSheetContext += '<th>'
                            + lServerList[j]
                            + '</th>'
                }
                sLinkSheetContext += '</tr></thead><tbody>'
                for(var k = 0; k<lPackageType.length; ++k){
                    if(lAvailablePackageType[i][k] === 1){
                        sLinkSheetContext += '<tr>'
                        for(j = 0; j < lServerList.length; ++j){
                            if(lDownloadLinks[k][j] === ''){
                                sLinkSheetContext += '<td>N/A</td>'
                            }
                            else{
                                sLinkSheetContext += '<td><a href="'
                                        + lDownloadLinks[k][j]
                                        + '">'
                                        + lPackageType[k]
                                        + '</a></td>'
                            }
                        }
                        sLinkSheetContext += '</tr>'
                    }
                }
                sLinkSheetContext += '</tbody></table>'
            }
            else{
                sLinkSheetContext += 'Comming Soon.';
            }
            sLinkSheetContext += '</section>'
      }
      sLinkSheetContext += '</section>'
      return sLinkSheetContext;
    }
  }

  this.writePrefer = function() {
      var osString = navigator.platform.toLowerCase();
      //Platform check.
      if(osString.indexOf("win")>-1)
      {
          //Windows platform.
          document.write("<a href=\"" +
                         oLinkGenerator.getDownloadLink('7z', 'SourceForge') +
                         "\">" +
                         "<p class=\"normal-font center-text\"><img src=\"../images/package_download.png\" /><br />μ for Windows (7z, "+
                         oLinkGenerator.getPackageSize('7z')+
                         ")</p></a><section>" +
                         "<h2 class=\"align-left\">Minimum System Requirements</h2>"+
                         "<p class=\"align-left\">"+
                         "  <ul>"+
                         "    <li>A SSE3 supported CPU. (A Pentium® 4 HT or later/AMD Athlon 64 X2 or later)</li>"+
                         "    <li>Minimum 170MB of available disk space.</li>"+
                         "    <li>Microsoft(R) Windows XP SP2 or later.</li>"+
                         "  </ul>"+
                         "</p>"+
                         "</section>");
      }
      else if(osString.indexOf("mac")>-1)
      {
          if(osString.indexOf("intel")>-1)
          {
              //Mac OS X with Intel processor.
              document.write("<a href=\""+
                             oLinkGenerator.getDownloadLink('app.zip', 'SourceForge') +
                             "\">"+
                             "<p class=\"normal-font center-text\"><img src=\"../images/package_download.png\" /><br />μ for Mac (.app.zip, "+
                             oLinkGenerator.getPackageSize('app.zip')+
                             ")</p></a>"+
                             "<section>"+
                             "<h2 class=\"align-left\">Minimum System Requirements</h2>"+
                             "<p class=\"align-left\">"+
                             "You need a Mac which can running OS X Lion (10.7) or later."+
                             "  <ul>"+
                             "    <li>Mac computer with an Intel Core Duo or later.</li>"+
                             "    <li>Minimum 140MB of available disk space.</li>"+
                             "    <li>OS X version 10.7 or later.</li>"+
                             "  </ul>"+
                             "</p>"+
                             "</section>");
          }
          else
          {
              document.write("<p class=\"normal-font center-text\">Sorry, but we have no μ for your Mac. </p>");
          }
      }
      else if(osString.indexOf("linux")>-1)
      {
          if(osString.indexOf("x86_64")>-1)
          {
              //Linux x86_64 platform.
              document.write("<a href=\"" +
                             oLinkGenerator.getDownloadLink('deb', 'SourceForge') +
                             "\">" +
                             "<p class=\"normal-font center-text\"><img src=\"../images/package_download.png\" /><br />μ for Linux x86_64 (deb, "+
                             oLinkGenerator.getPackageSize('deb')+
                             ")</p></a><section>" +
                             "<h2 class=\"align-left\">Minimum System Requirements</h2>"+
                             "<p class=\"align-left\">"+
                             "  <ul>"+
                             "    <li>A SSE3 supported CPU. (A Pentium® 4 HT or later/AMD Athlon 64 X2 or later)</li>"+
                             "    <li>Minimum 170MB of available disk space.</li>"+
                             "  </ul>"+
                             "</p>"+
                             "</section>");
          }
          else
          {
              document.write("<p class=\"normal-font center-text\">Sorry, but we have no μ for your Linux. </p>");
          }
      }
      else
      {
          document.write("<p class=\"normal-font center-text\"><img src=\"../images/package_download_unavaliable.png\" /></p>")
          document.write("<p class=\"normal-font center-text\">Sorry, but we have no μ for " + navigator.platform + " currently</p>");
      }
  };

  this.writeDownloadList = function () {
    document.write(oLinkGenerator.generate());
  };
};
