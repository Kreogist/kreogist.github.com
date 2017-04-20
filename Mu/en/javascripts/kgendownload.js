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
                    'zip (32-bit)',
                    '7z (32-bit)',
                    'zip (64-bit)',
                    '7z (64-bit)',
					'zip (64-bit, Intel)',
					'7z (64-bit, Intel)',
					'zip (64-bit, AMD)',
					'7z (64-bit, AMD)',
					'dmg',
                    'app.zip',
                    'deb (Ubuntu 16.04)'
                ];
        var lPackageSize = [
                    '51.0 MB',
                    '38.0 MB',
                    '51.0 MB',
                    '39.0 MB',
					'51.0 MB',
					'39.0 MB',
					'51.0 MB',
					'39.0 MB',
					'71.1 MB',
                    '34.8 MB',
                    '2.9 MB'
                ];
        var lAvailablePackageType =[
                    [1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1]
                ];
        var lDownloadLinks = [
                    ['', '', 'https://pan.baidu.com/s/1dFoYXSd', 'https://sourceforge.net/projects/kreogist-mu/files/Releases/1.0-beta1/Windows/mu_1.0.0-beta_win32_d9b5f2d.zip/download'],
                    ['', '', 'https://pan.baidu.com/s/1slm8BDj', 'https://sourceforge.net/projects/kreogist-mu/files/Releases/1.0-beta1/Windows/mu_1.0.0-beta_win32_d9b5f2d.7z/download'],
                    ['', '', 'https://pan.baidu.com/s/1nvwkiXN', 'https://sourceforge.net/projects/kreogist-mu/files/Releases/1.0-beta1/Windows/mu_1.0.0-beta_win64_d9b5f2d.zip/download'],
                    ['', '', 'https://pan.baidu.com/s/1crMTt0',  'https://sourceforge.net/projects/kreogist-mu/files/Releases/1.0-beta1/Windows/mu_1.0.0-beta_win64_d9b5f2d.7z/download'],
          ['', '', 'https://pan.baidu.com/s/1o85B8Zg', 'https://sourceforge.net/projects/kreogist-mu/files/Releases/1.0-beta1/Windows/mu_1.0.0-beta_win64_intel_d9b5f2d.zip/download'],
          ['', '', 'https://pan.baidu.com/s/1dFKNe3B', 'https://sourceforge.net/projects/kreogist-mu/files/Releases/1.0-beta1/Windows/mu_1.0.0-beta_win64_intel_d9b5f2d.7z/download'],
          ['', '', 'https://pan.baidu.com/s/1dFafSS5', 'https://sourceforge.net/projects/kreogist-mu/files/Releases/1.0-beta1/Windows/mu_1.0.0-beta_win64_amd_d9b5f2d.zip/download'],
          ['', '', 'https://pan.baidu.com/s/1bpN8TKr', 'https://sourceforge.net/projects/kreogist-mu/files/Releases/1.0-beta1/Windows/mu_1.0.0-beta_win64_amd_d9b5f2d.7z/download'],
          ['', '', 'https://pan.baidu.com/s/1jH533Qu', 'https://sourceforge.net/projects/kreogist-mu/files/Releases/1.0-beta1/Mac/mu_1.0.0-beta_mac_d9b5f2d.dmg/download'],
                    ['', '', 'https://pan.baidu.com/s/1geJgMwb', 'https://sourceforge.net/projects/kreogist-mu/files/Releases/1.0-beta1/Mac/mu_1.0.0-beta_mac_d9b5f2d.app.zip/download'],
                    ['', '', 'https://pan.baidu.com/s/1i4GuUTR', 'https://sourceforge.net/projects/kreogist-mu/files/Releases/1.0-beta1/Linux/mu_1.0.0-beta_ubuntu_amd64_d9b5f2d.deb/download']
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
            document.write('<section id="download-prefer">' +
                           "<a href=\"" +
                           oLinkGenerator.getDownloadLink('7z (32-bit)', 'SourceForge') +
                           "\">" +
                           "<p class=\"normal-font center-text\"><img src=\"../images/package_download.png\" /><br />μ for Windows (7z 32-bit, "+
                           oLinkGenerator.getPackageSize('7z (32-bit)')+
                           ")</p></a>"+
                           "<a href=\"" +
                           oLinkGenerator.getDownloadLink('7z (64-bit)', 'SourceForge') +
                           "\">" +
                           "<p class=\"normal-font center-text\"><img src=\"../images/package_download.png\" /><br />μ for Windows (7z 64-bit, "+
                           oLinkGenerator.getPackageSize('7z (64-bit)')+
                           ")</p></a>"+
                           "</section>" +
                           "<section>" +
                           "<h2 class=\"align-left\">Minimum System Requirements</h2>"+
                           "<p class=\"align-left\">"+
                           "  <ul>"+
                           "    <li>A SSE3 supported CPU. (A Intel® Pentium™ 4 HT or later/AMD® Athlon™ 64 x2 or later)</li>"+
                           "    <li>Minimum 170MB of available disk space.</li>"+
                           "    <li>Microsoft® Windows® XP SP2 or later.</li>"+
                           "  </ul>"+
                           "</p>"+
                           "</section>");
        }
        else if(osString.indexOf("mac")>-1)
        {
            if(osString.indexOf("intel")>-1)
            {
                //Mac OS X with Intel processor.
                document.write('<section id="download-prefer">' +
                               "<a href=\""+
                               oLinkGenerator.getDownloadLink('dmg', 'SourceForge') +
                               "\">"+
                               "<p class=\"normal-font center-text\"><img src=\"../images/package_download.png\" /><br />μ for Mac (dmg, "+
                               oLinkGenerator.getPackageSize('dmg')+
                               ")</p></a></section>"+
                               "<section>"+
                               "<h2 class=\"align-left\">Minimum System Requirements</h2>"+
                               "<p class=\"align-left\">"+
                               "You need a Mac which can running OS X Lion (10.7) or later."+
                               "  <ul>"+
                               "    <li>Mac computer with an Intel® Core™ Duo or later.</li>"+
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
                document.write('<section id="download-prefer">' +
                               "<a href=\"" +
                               oLinkGenerator.getDownloadLink('deb (Ubuntu 16.04)', 'SourceForge') +
                               "\">" +
                               "<p class=\"normal-font center-text\"><img src=\"../images/package_download.png\" /><br />μ for 64-bit Ubuntu 16.04 (deb, "+
                               oLinkGenerator.getPackageSize('deb (Ubuntu 16.04)')+
                               ")</p></a></section>" +
                               "<section>" +
                               "<h2 class=\"align-left\">Minimum System Requirements</h2>"+
                               "<p class=\"align-left\">"+
                               "  <ul>"+
                               "    <li>A SSE3 supported CPU. (A Intel® Pentium™ 4 HT or later/AMD® Athlon™ 64 x2 or later)</li>"+
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
