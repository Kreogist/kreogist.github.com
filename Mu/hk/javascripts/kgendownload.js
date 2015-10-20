var kgendonwload = new function(){
    var oLinkGenerator = new function(){
        var lPlatformText = [
                    'Windows',
                    'Mac OS X',
                    'Linux'
                ];
        var lServerList = [
                    'Github',
                    '華為網盤',
                    '百度雲',
                    'SourceForge'
                ];
        var lPackageType = [
                    'zip（32位元）',
                    '7z（32位元）',
                    'zip（64位元）',
                    '7z（64位元）',
					'zip（64位元，Intel）',
					'7z（64位元，Intel）',
					'zip（64位元，AMD）',
					'7z（64位元，AMD）',
					'dmg',
                    'app.zip',
                    'deb'
                ];
        var lPackageSize = [
                    '37.0 MB',
                    '26.6 MB',
                    '51.1 MB',
                    '38.7 MB',
					'51.1 MB',
					'38.7 MB',
					'51.1 MB',
					'38.7 MB',
					'64.9 MB',
                    '32.6 MB',
                    '2.52 MB'
                ];
        var lAvailablePackageType =[
                    [1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1]
                ];
        var lDownloadLinks = [
                    ['https://github.com/Kreogist/Mu/releases/download/0.9.1/mu_0.9.1_32-bit_b0bc227.zip', '', 'http://pan.baidu.com/s/1sj3jHk5', 'http://sourceforge.net/projects/kreogist-mu/files/Releases/0.9.1/Windows/mu_0.9.1_32-bit_b0bc227.zip/download'],
                    ['https://github.com/Kreogist/Mu/releases/download/0.9.1/mu_0.9.1_32-bit_b0bc227.7z', '', 'http://pan.baidu.com/s/1dDyO6a9', 'http://sourceforge.net/projects/kreogist-mu/files/Releases/0.9.1/Windows/mu_0.9.1_32-bit_b0bc227.7z/download'],
                    ['https://github.com/Kreogist/Mu/releases/download/0.9.1/mu_0.9.1_64-bit_b0bc227.zip', '', 'http://pan.baidu.com/s/1jGpkQMi', 'http://sourceforge.net/projects/kreogist-mu/files/Releases/0.9.1/Windows/mu_0.9.1_64-bit_b0bc227.zip/download'],
                    ['https://github.com/Kreogist/Mu/releases/download/0.9.1/mu_0.9.1_64-bit_b0bc227.7z', '', 'http://pan.baidu.com/s/1c0nvmHq', 'http://sourceforge.net/projects/kreogist-mu/files/Releases/0.9.1/Windows/mu_0.9.1_64-bit_b0bc227.7z/download'],
					['https://github.com/Kreogist/Mu/releases/download/0.9.1/mu_0.9.1_64-bit_Intel_b0bc227.zip', '', 'http://pan.baidu.com/s/1qWQmw00', 'http://sourceforge.net/projects/kreogist-mu/files/Releases/0.9.1/Windows/mu_0.9.1_64-bit_Intel_b0bc227.zip/download'],
					['https://github.com/Kreogist/Mu/releases/download/0.9.1/mu_0.9.1_64-bit_Intel_b0bc227.7z', '', 'http://pan.baidu.com/s/1gdlTjzX', 'http://sourceforge.net/projects/kreogist-mu/files/Releases/0.9.1/Windows/mu_0.9.1_64-bit_Intel_b0bc227.7z/download'],
					['https://github.com/Kreogist/Mu/releases/download/0.9.1/mu_0.9.1_64-bit_AMD_b0bc227.zip', '', 'http://pan.baidu.com/s/1bndTSnX', 'http://sourceforge.net/projects/kreogist-mu/files/Releases/0.9.1/Windows/mu_0.9.1_64-bit_AMD_b0bc227.zip/download'],
					['https://github.com/Kreogist/Mu/releases/download/0.9.1/mu_0.9.1_64-bit_AMD_b0bc227.7z', '', 'http://pan.baidu.com/s/1qW25MdI', 'http://sourceforge.net/projects/kreogist-mu/files/Releases/0.9.1/Windows/mu_0.9.1_64-bit_AMD_b0bc227.7z/download'],
					['https://github.com/Kreogist/Mu/releases/download/0.9.1/mu_0.9.1_b0bc227.dmg', '', 'http://pan.baidu.com/s/1DhH0M', 'http://sourceforge.net/projects/kreogist-mu/files/Releases/0.9.1/Mac/mu_0.9.1_b0bc227.dmg/download'],
                    ['https://github.com/Kreogist/Mu/releases/download/0.9.1/mu_0.9.1_b0bc227.app.zip', '', 'http://pan.baidu.com/s/1gdDD8MB', 'http://sourceforge.net/projects/kreogist-mu/files/Releases/0.9.1/Mac/mu_0.9.1_b0bc227.app.zip/download'],
                    ['https://github.com/Kreogist/Mu/releases/download/0.9.1/mu_0.9.1_b0bc227.deb', '', 'http://pan.baidu.com/s/1i395FYt', 'http://sourceforge.net/projects/kreogist-mu/files/Releases/0.9.1/Linux/mu_0.9.1_b0bc227.deb/download']
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
                           oLinkGenerator.getDownloadLink('7z（32位元）', '百度雲') +
                           "\">" +
                           "<p class=\"normal-font center-text\"><img src=\"../images/package_download.png\" /><br />適用於 32 位元 Windows 的 μ（7z，"+
                           oLinkGenerator.getPackageSize('7z（32位元）')+
                           "）</p></a>"+
                           "<a href=\"" +
                           oLinkGenerator.getDownloadLink('7z（64位元）', '百度雲') +
                           "\">" +
                           "<p class=\"normal-font center-text\"><img src=\"../images/package_download.png\" /><br />適用於 64 位元 Windows 的 μ（7z，"+
                           oLinkGenerator.getPackageSize('7z（64位元）')+
                           "）</p></a>"+
                           "</section>" +
                           "<section>" +
                           "<h2 class=\"align-left\">最低系統需求</h2>"+
                           "<p class=\"align-left\">"+
                           "  <ul>"+
                           "    <li>一個支援SSE3指令集的CPU。（Intel® Pentium™ 4 HT或更新、AMD® Athlon™ 64 x2或更新）</li>"+
                           "    <li>170 MB 的可用磁碟空間。</li>"+
                           "    <li>Microsoft® Windows® XP SP2 或更新版本的 Windows® 作業系統。</li>"+
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
                               oLinkGenerator.getDownloadLink('dmg', '百度雲') +
                               "\">"+
                               "<p class=\"normal-font center-text\"><img src=\"../images/package_download.png\" /><br />適用於 Mac OS X 的 μ（dmg，"+
                               oLinkGenerator.getPackageSize('dmg')+
                               "）</p></a></section>"+
                               "<section>"+
                               "<h2 class=\"align-left\">最低系統需求</h2>"+
                               "<p class=\"align-left\">"+
                               "你需要一台能夠運行 OS X Lion（10.7）的 Mac。"+
                               "  <ul>"+
                               "    <li>配有Intel® Core™或更新版本處理器的 Mac 。</li>"+
                               "    <li>140 MB 的可用磁碟空間。</li>"+
                               "    <li>OS X 10.7 或者更新的版本。</li>"+
                               "  </ul>"+
                               "</p>"+
                               "</section>");
            }
            else
            {
                document.write("<p class=\"normal-font center-text\">很抱歉，但是 μ 不支援您所使用的 Mac 系統。</p>");
            }
        }
        else if(osString.indexOf("linux")>-1)
        {
            if(osString.indexOf("x86_64")>-1)
            {
                //Linux x86_64 platform.
                document.write('<section id="download-prefer">' +
                               "<a href=\"" +
                               oLinkGenerator.getDownloadLink('deb', '百度雲') +
                               "\">" +
                               "<p class=\"normal-font center-text\"><img src=\"../images/package_download.png\" /><br />適用於 64 位元 Linux 的 μ（deb, "+
                               oLinkGenerator.getPackageSize('deb')+
                               "）</p></a></section>" +
                               "<section>" +
                               "<h2 class=\"align-left\">最低系統需求</h2>"+
                               "<p class=\"align-left\">"+
                               "  <ul>"+
                               "    <li>一個支援SSE3指令集的CPU。（Intel® Pentium™ 4 HT或更新、AMD® Athlon™ 64 x2或更新）</li>"+
                               "    <li>170 MB 的可用磁碟空間。</li>"+
                               "  </ul>"+
                               "</p>"+
                               "</section>");
            }
            else
            {
                document.write("<p class=\"normal-font center-text\">很抱歉，但是 μ 不支援您所使用的 Linux 系統。</p>");
            }
        }
        else
        {
            document.write("<p class=\"normal-font center-text\"><img src=\"../images/package_download_unavaliable.png\" /></p>")
            document.write("<p class=\"normal-font center-text\">很抱歉，但是我們目前沒有支援您系統的 μ 。</p>");
        }
    };

    this.writeDownloadList = function () {
        document.write(oLinkGenerator.generate());
    };
};

