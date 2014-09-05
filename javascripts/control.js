var large_view_pic="large-view-";
var small_view_pic="small-view-pic-";
var summary="summary-";
var sm_count=2;

function toggleActive(){
    for(var i = 0;i < arguments.length;++i){
        el = arguments[i];
        if(el.classList.contains('active')){
            el.classList.add('active');
        }
        else{
            el.classList.remove('active');
        }
    }
    return 0;
}

function setActive(){
    for(var i = 0;i < arguments.length;++i){
        el = arguments[i];
        if(!(el.classList.contains('active'))){
            el.classList.add('active');
        }
    }
    return 0;
}

function unsetActive(){
    for(var i = 0;i < arguments.length;++i){
        el = arguments[i];
        if(el.classList.contains('active')){
            el.classList.remove('active');
        }
    }
    return 0;
}

function click_preview(view_pic){
    idx=view_pic.getAttribute("index").toString();
    for(var i = 1;i <= sm_count;++i){
        var el_summary = document.getElementById(summary + i.toString());
        var el_small_view_pic = document.getElementById(small_view_pic + i.toString()).parentElement;
        var el_large_view_pic = document.getElementById(large_view_pic + i.toString());
        if(i.toString()==idx){
            setActive(el_summary,el_small_view_pic,el_large_view_pic);
            continue;
        }
        unsetActive(el_summary,el_small_view_pic,el_large_view_pic);
    }
}