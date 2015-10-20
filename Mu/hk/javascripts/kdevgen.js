var kdevgen = new function(){
    var oBook = new function(){
        var aDevItems = [
            ['Overview',      '概覽',       'index_content.html'],
            ['SourceCode',    '原始程式碼',     'sourcecode.html'],
            ['Documentation', '文檔',  'documentation.html'],
            ['Dependence',    '依賴',     'dependence.html'],
            ['BugReport',     'Bug 回饋',     'bugreport.html'],
            ['GitHowTo',      'Git 快速入門',     'git-how-to.html']
        ];
        var iListUBound=5;
        var sPrefix = "<li>";
        var sAppendix = "</li>"
        this.urlToFilename = function (sUrl) {
            for(var i=0; i<(aDevItems.length); ++i){
                if(aDevItems[i][0]==sUrl)
                {
                    return aDevItems[i][2];
                }
            }
        }

        this.generate = function () {
            var sListContext = "";
            for(var i=0; i<iListUBound; ++i){
                sListContext += sPrefix
                             + "<a class=\"kjumper-link\" href=\"#"
                             + aDevItems[i][0]
                             + "\" data-title=\""
                             + aDevItems[i][1]
                             + "\" data-url=\""
                             + aDevItems[i][2]
                             + "\">"
                             + aDevItems[i][1]
                             + "</a>"
                             + sAppendix
                             + "\n";
            }
            return sListContext;
        }
    }
    this.urlToFilename = function (sUrl){
        return oBook.urlToFilename(sUrl);
    }

    this.writeDevItems = function () {
        document.write(oBook.generate());
    }
}
