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
                    'deb (Ubuntu 15.04)',
                    'deb (Ubuntu 15.10)'
                ];
        var lPackageSize = [
                    '47.4 MB',
                    '36.4 MB',
                    '48.6 MB',
                    '37.3 MB',
					'48.6 MB',
					'37.3 MB',
					'48.6 MB',
					'37.3 MB',
					'65.8 MB',
                    '32.4 MB',
                    '2.7 MB',
                    '2.7 MB'
                ];
        var lAvailablePackageType =[
                    [1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1]
                ];
        var lDownloadLinks = [
                    ['', '', 'http://pan.baidu.com/s/1dEiNBsl', 'https://sourceforge.net/projects/kreogist-mu/files/Releases/0.9.9/Windows/mu_0.9.9_win32_c2340db.zip/download'],
                    ['', '', 'http://pan.baidu.com/s/1dDPkXRN', 'https://sourceforge.net/projects/kreogist-mu/files/Releases/0.9.9/Windows/mu_0.9.9_win32_c2340db.7z/download'],
                    ['', '', 'http://pan.baidu.com/s/1i4bUazz', 'https://sourceforge.net/projects/kreogist-mu/files/Releases/0.9.9/Windows/mu_0.9.9_win64_c2340db.zip/download'],
                    ['', '', 'http://pan.baidu.com/s/1mhueJVi', 'https://sourceforge.net/projects/kreogist-mu/files/Releases/0.9.9/Windows/mu_0.9.9_win64_c2340db.7z/download'],
					['', '', 'http://pan.baidu.com/s/1eRn5uAA', 'https://sourceforge.net/projects/kreogist-mu/files/Releases/0.9.9/Windows/mu_0.9.9_win64_intel_c2340db.zip/download'],
					['', '', 'http://pan.baidu.com/s/1c0O7cMs', 'https://sourceforge.net/projects/kreogist-mu/files/Releases/0.9.9/Windows/mu_0.9.9_win64_intel_c2340db.7z/download'],
					['', '', 'http://pan.baidu.com/s/1dEl57lZ', 'https://sourceforge.net/projects/kreogist-mu/files/Releases/0.9.9/Windows/mu_0.9.9_win64_amd_c2340db.zip/download'],
					['', '', 'http://pan.baidu.com/s/1nu0Os7v', 'https://sourceforge.net/projects/kreogist-mu/files/Releases/0.9.9/Windows/mu_0.9.9_win64_amd_c2340db.7z/download'],
					['', '', 'http://pan.baidu.com/s/1kUc5WYb', 'https://sourceforge.net/projects/kreogist-mu/files/Releases/0.9.9/Mac/mu_0.9.9_mac_c2340db.dmg/download'],
                    ['', '', 'http://pan.baidu.com/s/1dDToFbN', 'https://sourceforge.net/projects/kreogist-mu/files/Releases/0.9.9/Mac/mu_0.9.9_mac_c2340db.app.zip/download'],
                    ['', '', 'http://pan.baidu.com/s/1gemhytd', 'https://sourceforge.net/projects/kreogist-mu/files/Releases/0.9.9/Linux/mu_0.9.9_amd64_ubuntu_15_04.deb/download'],
                    ['', '', 'http://pan.baidu.com/s/1bkpJsy', 'https://sourceforge.net/projects/kreogist-mu/files/Releases/0.9.9/Linux/mu_0.9.9_amd64_ubuntu_15_10.deb/download']
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
                               oLinkGenerator.getDownloadLink('deb (Ubuntu 15.04)', 'SourceForge') +
                               "\">" +
                               "<p class=\"normal-font center-text\"><img src=\"../images/package_download.png\" /><br />μ for 64-bit Ubuntu 15.10 (deb, "+
                               oLinkGenerator.getPackageSize('deb (Ubuntu 15.04)')+
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
