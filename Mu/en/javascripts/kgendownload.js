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
                    'app.zip',
                    'deb'
                ];
        var lPackageSize = [
                    '46.6 MB',
                    '35.8 MB',
                    '46.3 MB',
                    '35.8 MB',
					'46.3 MB',
					'35.8 MB',
					'46.3 MB',
					'35.8 MB',
                    '32.5 MB',
                    '2.50 MB'
                ];
        var lAvailablePackageType =[
                    [1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 1]
                ];
        var lDownloadLinks = [
                    ['https://github.com/Kreogist/Mu/releases/download/0.9/mu_0.9_32-bit_a8b37b4201.zip', '', 'http://pan.baidu.com/s/1qW5TaaC', 'http://sourceforge.net/projects/kreogist-mu/files/Releases/0.9/Windows/mu_0.9_32-bit_a8b37b4201.zip/download'],
                    ['https://github.com/Kreogist/Mu/releases/download/0.9/mu_0.9_32-bit_a8b37b4201.7z', '', 'http://pan.baidu.com/s/1bnuOj6J', 'http://sourceforge.net/projects/kreogist-mu/files/Releases/0.9/Windows/mu_0.9_32-bit_a8b37b4201.7z/download'],
                    ['https://github.com/Kreogist/Mu/releases/download/0.9/mu_0.9_64-bit_blend_a8b37b4201.zip', '', 'http://pan.baidu.com/s/1jGxXFuA', 'http://sourceforge.net/projects/kreogist-mu/files/Releases/0.9/Windows/mu_0.9_64-bit_blend_a8b37b4201.zip/download'],
                    ['https://github.com/Kreogist/Mu/releases/download/0.9/mu_0.9_64-bit_blend_a8b37b4201.7z', '', 'http://pan.baidu.com/s/1jG3xy2i', 'http://sourceforge.net/projects/kreogist-mu/files/Releases/0.9/Windows/mu_0.9_64-bit_blend_a8b37b4201.7z/download'],
					['https://github.com/Kreogist/Mu/releases/download/0.9/mu_0.9_64-bit_intel_a8b37b4201.zip', '', 'http://pan.baidu.com/s/1pJtJPFl', 'http://sourceforge.net/projects/kreogist-mu/files/Releases/0.9/Windows/mu_0.9_64-bit_intel_a8b37b4201.zip/download'],
					['https://github.com/Kreogist/Mu/releases/download/0.9/mu_0.9_64-bit_intel_a8b37b4201.7z', '', 'http://pan.baidu.com/s/1kTGmBm3', 'http://sourceforge.net/projects/kreogist-mu/files/Releases/0.9/Windows/mu_0.9_64-bit_intel_a8b37b4201.7z/download'],
					['https://github.com/Kreogist/Mu/releases/download/0.9/mu_0.9_64-bit_amd_a8b37b4201.zip', '', 'http://pan.baidu.com/s/1dDhmUhN', 'http://sourceforge.net/projects/kreogist-mu/files/Releases/0.9/Windows/mu_0.9_64-bit_amd_a8b37b4201.zip/download'],
					['https://github.com/Kreogist/Mu/releases/download/0.9/mu_0.9_64-bit_amd_a8b37b4201.7z', '', 'http://pan.baidu.com/s/1i38Phqt', 'http://sourceforge.net/projects/kreogist-mu/files/Releases/0.9/Windows/mu_0.9_64-bit_amd_a8b37b4201.7z/download'],
                    ['https://github.com/Kreogist/Mu/releases/download/0.9/mu_0.9_mac_a8b37b4201.zip', '', 'http://pan.baidu.com/s/1pJEI2pl', 'http://sourceforge.net/projects/kreogist-mu/files/Releases/0.9/Mac/mu_0.9_mac_a8b37b4201.zip/download'],
                    ['https://github.com/Kreogist/Mu/releases/download/0.9/mu_0.9_a8b37b4201.deb', '', 'http://pan.baidu.com/s/1mgpghAg', 'http://sourceforge.net/projects/kreogist-mu/files/Releases/0.9/Linux/mu_0.9_a8b37b4201.deb/download']
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
                           oLinkGenerator.getDownloadLink('7z (32-bit)', 'Github') +
                           "\">" +
                           "<p class=\"normal-font center-text\"><img src=\"../images/package_download.png\" /><br />μ for Windows (7z 32-bit, "+
                           oLinkGenerator.getPackageSize('7z (32-bit)')+
                           ")</p></a>"+
                           "<a href=\"" +
                           oLinkGenerator.getDownloadLink('7z (64-bit)', 'Github') +
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
                               oLinkGenerator.getDownloadLink('app.zip', 'Github') +
                               "\">"+
                               "<p class=\"normal-font center-text\"><img src=\"../images/package_download.png\" /><br />μ for Mac (.app.zip, "+
                               oLinkGenerator.getPackageSize('app.zip')+
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
                               oLinkGenerator.getDownloadLink('deb', 'Github') +
                               "\">" +
                               "<p class=\"normal-font center-text\"><img src=\"../images/package_download.png\" /><br />μ for 64-bit Linux (deb, "+
                               oLinkGenerator.getPackageSize('deb')+
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
