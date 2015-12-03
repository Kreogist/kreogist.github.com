var kdevgen = new function(){
    var oBook = new function(){
        var aDevItems = [
            ['Overview',      '概览',       		'index_content.html'],
            ['SourceCode',    '源代码',     		'sourcecode.html'],
            ['Documentation', '文档',  				'documentation.html'],
            ['Dependence',    '依赖',     			'dependence.html'],
            ['BugReport',     'Bug 反馈',     		'bugreport.html'],
            ['GitHowTo',      'Git 快速入门',     	'git-how-to.html'],
			['CompileHowTo',  '构建 Kreogist μ',   'compile-how-to.html']
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
