var kgendonwload = new function(){
  var oLinkGenerator = new function(){
    var lPlatformText = [
      'Windows',
      'Mac OS X',
      'Linux'
    ];
    var lServerList = [
      'Github',
      '华为',
      '百度云',
      'SourceForge'
    ];
    var lPackageType = [
        'zip',
        '7z',
        'app.zip',
    ];
    var lAvailablePackageType =[
        [1, 1, 0],
        [0, 0, 1],
        [0, 0, 0]
    ];
    var lDownloadLinks = [
        [['', 'http://dl.vmall.com/c0wqcvaa4c', 'http://pan.baidu.com/s/1i3w0tTV', 'http://sourceforge.net/projects/kreogist-mu/files/Releases/0.6/Windows/mu_0.6_3af723e.zip/download'],
         ['', 'http://dl.vmall.com/c09zfb8n6y', 'http://pan.baidu.com/s/1bnuAGsZ', 'http://sourceforge.net/projects/kreogist-mu/files/Releases/0.6/Windows/mu_0.6_3af723e.7z/download'],
         ['', '', '', '']],
        [['', '', '', ''],
         ['', '', '', ''],
         ['', 'http://dl.vmall.com/c0ntv7n0uo', 'http://pan.baidu.com/s/1bn2IjNp', 'http://sourceforge.net/projects/kreogist-mu/files/Releases/0.6/Mac/mu_0.6_3af723e.app.zip/download']],
        [['', '', '', ''],
         ['', '', '', ''],
         ['', '', '', '']]
    ];
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
                            if(lDownloadLinks[i][k][j] === ''){
                                sLinkSheetContext += '<td>N/A</td>'
                            }
                            else{
                                sLinkSheetContext += '<td><a href="'
                                        + lDownloadLinks[i][k][j]
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
                sLinkSheetContext += '即将到来';
            }
            sLinkSheetContext += '</section>'
      }
      sLinkSheetContext += '</section>'
      return sLinkSheetContext;
    }
  }

  this.writeDownloadList = function () {
    document.write(oLinkGenerator.generate());
  };
};
