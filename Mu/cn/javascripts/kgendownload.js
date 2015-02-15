﻿var kgendonwload = new function(){
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
                    'zip',
                    '7z',
                    'app.zip',
                    'deb'
                ];
        var lPackageSize = [
                    '26.8 MB',
                    '19.2 MB',
                    '14.3 MB',
                    '1.3 MB'
                ];
        var lAvailablePackageType =[
                    [1, 1, 0, 0],
                    [0, 0, 1, 0],
                    [0, 0, 0, 1]
                ];
        var lDownloadLinks = [
                    ['', 'http://dl.vmall.com/c0i6pk3viq', 'http://pan.baidu.com/s/1bno55Av', 'http://sourceforge.net/projects/kreogist-mu/files/Releases/0.7/Windows/mu_0.7_a3b0058.zip/download'],
                    ['', 'http://dl.vmall.com/c0fadqi2xx', 'http://pan.baidu.com/s/1pJjxw5X', 'http://sourceforge.net/projects/kreogist-mu/files/Releases/0.7/Windows/mu_0.7_a3b0058.7z/download'],
                    ['', 'http://dl.vmall.com/c0us8qmkcs', 'http://pan.baidu.com/s/1c0CkfwG', 'http://sourceforge.net/projects/kreogist-mu/files/Releases/0.7/Mac/mu_0.7_a3b0058.app.zip/download'],
                    ['', 'http://dl.vmall.com/c0qgmse3co', 'http://pan.baidu.com/s/1dDAMiml', 'http://sourceforge.net/projects/kreogist-mu/files/Releases/0.7/Linux/mu_0.7_a3b0058.deb/download']
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
                           oLinkGenerator.getDownloadLink('7z', '百度云') +
                           "\">" +
                           "<p class=\"normal-font center-text\"><img src=\"../images/package_download.png\" /><br />适用于 Windows 的 μ（7z，"+
                           oLinkGenerator.getPackageSize('7z')+
                           "）</p></a><section>" +
                           "<h2 class=\"align-left\">最低系统需求</h2>"+
                           "<p class=\"align-left\">"+
                           "  <ul>"+
                           "    <li>一个支持SSE3指令集的CPU。（Pentium® 4 HT或更新、AMD Athlon 64 X2或更新）</li>"+
                           "    <li>170 MB 的可用磁盘空间。</li>"+
                           "    <li>Microsoft® Windows XP SP2 或更新版本的 Windows 操作系统。</li>"+
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
                               oLinkGenerator.getDownloadLink('app.zip', '百度云') +
                               "\">"+
                               "<p class=\"normal-font center-text\"><img src=\"../images/package_download.png\" /><br />适用于 Mac OS X 的 μ（.app.zip，"+
                               oLinkGenerator.getPackageSize('app.zip')+
                               "）</p></a>"+
                               "<section>"+
                               "<h2 class=\"align-left\">最低系统需求</h2>"+
                               "<p class=\"align-left\">"+
                               "你需要一台能够运行 OS X Lion（10.7）的 Mac。"+
                               "  <ul>"+
                               "    <li>配有英特尔®酷睿™或更新版本处理器的 Mac 。</li>"+
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
                document.write("<a href=\"" +
                               oLinkGenerator.getDownloadLink('deb', '百度云') +
                               "\">" +
                               "<p class=\"normal-font center-text\"><img src=\"../images/package_download.png\" /><br />适用于 x86_64 架构 Linux 的 μ（deb, "+
                               oLinkGenerator.getPackageSize('deb')+
                               "）</p></a><section>" +
                               "<h2 class=\"align-left\">最低系统需求</h2>"+
                               "<p class=\"align-left\">"+
                               "  <ul>"+
                               "    <li>一个支持SSE3指令集的CPU。（Pentium® 4 HT或更新、AMD Athlon 64 X2或更新）</li>"+
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
