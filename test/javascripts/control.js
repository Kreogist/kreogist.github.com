var large_view_pic="large-view-pic";
var small_view_pic="small-view-pic-";
var summary="summary-";
var sm_count=4;

function click_preview(view_pic){
    idx=view_pic.getAttribute("index").toString();
    for(var i = 1;i <= sm_count;++i){
        var el = document.getElementById(summary + i.toString());
        if ( el.classList.contains('active') ){
            el.classList.remove('active');
        }
    }
    document.getElementById(summary + idx).classList.add('active');
    document.getElementById(large_view_pic).setAttribute("src",document.getElementById(small_view_pic+idx).src);
}