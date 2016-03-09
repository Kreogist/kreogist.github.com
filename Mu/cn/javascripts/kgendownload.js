var kgendonwload = new function(){
    var oLinkGenerator = new function(){
        var lPlatformText = [
                    'Windows',
                    'Mac OS X',
                    'Linux'
                ];
        var lServerList = [
                    'Github',
                    '华为网盘',
                    '百度云',
                    'SourceForge'
                ];
        var lPackageType = [
                    'zip（32位）',
                    '7z（32位）',
                    'zip（64位）',
                    '7z（64位）',
					'zip（64位，Intel）',
					'7z（64位，Intel）',
					'zip（64位，AMD）',
					'7z（64位，AMD）',
					'dmg',
                    'app.zip',
                    'deb（Ubuntu 15.04）',
                    'deb（Ubuntu 15.10）'
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
                           oLinkGenerator.getDownloadLink('7z（32位）', '百度云') +
                           "\">" +
                           "<p class=\"normal-font center-text\"><img src=\"../images/package_download.png\" /><br />适用于 32 位 Windows 的 μ（7z，"+
                           oLinkGenerator.getPackageSize('7z（32位）')+
                           "）</p></a>"+
                           "<a href=\"" +
                           oLinkGenerator.getDownloadLink('7z（64位）', '百度云') +
                           "\">" +
                           "<p class=\"normal-font center-text\"><img src=\"../images/package_download.png\" /><br />适用于 64 位 Windows 的 μ（7z，"+
                           oLinkGenerator.getPackageSize('7z（64位）')+
                           "）</p></a>"+
                           "</section>" +
                           "<section>" +
                           "<h2 class=\"align-left\">最低系统需求</h2>"+
                           "<p class=\"align-left\">"+
                           "  <ul>"+
                           "    <li>一个支持SSE3指令集的CPU。（Intel® Pentium™ 4 HT或更新、AMD® Athlon™ 64 x2或更新）</li>"+
                           "    <li>170 MB 的可用磁盘空间。</li>"+
                           "    <li>Microsoft® Windows® XP SP2 或更新版本的 Windows® 操作系统。</li>"+
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
                               oLinkGenerator.getDownloadLink('dmg', '百度云') +
                               "\">"+
                               "<p class=\"normal-font center-text\"><img src=\"../images/package_download.png\" /><br />适用于 Mac OS X 的 μ（dmg，"+
                               oLinkGenerator.getPackageSize('dmg')+
                               "）</p></a></section>"+
                               "<section>"+
                               "<h2 class=\"align-left\">最低系统需求</h2>"+
                               "<p class=\"align-left\">"+
                               "你需要一台能够运行 OS X Lion（10.7）的 Mac。"+
                               "  <ul>"+
                               "    <li>配有Intel® Core™或更新版本处理器的 Mac 。</li>"+
                               "    <li>140 MB 的可用磁盘空间。</li>"+
                               "    <li>OS X 10.7 或者更新的版本。</li>"+
                               "  </ul>"+
                               "</p>"+
                               "</section>");
            }
            else
            {
                document.write("<p class=\"normal-font center-text\">很抱歉，但是 μ 不支持您所使用的 Mac 系统。</p>");
            }
        }
        else if(osString.indexOf("linux")>-1)
        {
            if(osString.indexOf("x86_64")>-1)
            {
                //Linux x86_64 platform.
                document.write('<section id="download-prefer">' +
                               "<a href=\"" +
                               oLinkGenerator.getDownloadLink('deb（Ubuntu 15.04）', '百度云') +
                               "\">" +
                               "<p class=\"normal-font center-text\"><img src=\"../images/package_download.png\" /><br />适用于 64 位 Ubuntu 15.04 的 μ（deb, "+
                               oLinkGenerator.getPackageSize('deb（Ubuntu 15.04）')+
                               "）</p></a></section>" +
                               "<section>" +
                               "<h2 class=\"align-left\">最低系统需求</h2>"+
                               "<p class=\"align-left\">"+
                               "  <ul>"+
                               "    <li>一个支持SSE3指令集的CPU。（Intel® Pentium™ 4 HT或更新、AMD® Athlon™ 64 x2或更新）</li>"+
                               "    <li>170 MB 的可用磁盘空间。</li>"+
                               "  </ul>"+
                               "</p>"+
                               "</section>");
            }
            else
            {
                document.write("<p class=\"normal-font center-text\">很抱歉，但是 μ 不支持您所使用的 Linux 系统。</p>");
            }
        }
        else
        {
            document.write("<p class=\"normal-font center-text\"><img src=\"../images/package_download_unavaliable.png\" /></p>")
            document.write("<p class=\"normal-font center-text\">很抱歉，但是我们目前没有支持您系统的 μ 。</p>");
        }
    };

    this.writeDownloadList = function () {
        document.write(oLinkGenerator.generate());
    };
};
