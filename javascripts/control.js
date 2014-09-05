var large_view_pic="large-view-pic";
var small_view_pic="small-view-pic-";
var summary="summary-";
var sm_count=4;

function click_preview(view_pic){
    idx=view_pic.getAttribute("index").toString();
    for(var i = 1;i <= sm_count;++i){
        var el_summary = document.getElementById(summary + i.toString());
        var el_small_view = document.getElementById(small_view_pic + i.toString()).parentElement;
        if(i.toString()==idx){
            if( !(el_summary.classList.contains('active')) ){
                el_summary.classList.add('active');
            }
            if( !(el_small_view.classList.contains('active')) ){
                el_small_view.classList.add('active');
            }
            continue;
        }
        if ( el_summary.classList.contains('active') ){
            el_summary.classList.remove('active');
        }
        if(el_small_view.classList.contains('active')){
            el_small_view.classList.remove('active');
        }
    }
    document.getElementById(large_view_pic).setAttribute("src",document.getElementById(small_view_pic+idx).src);
}