//function equalize() {
//    if(document.getElementById('left_col') && document.getElementById('right_col')){
//        var maxHeight = Math.max(document.getElementById('left_col').scrollHeight,document.getElementById('right_col').scrollHeight);
//        document.getElementById('left_col').style.height=maxHeight+'px';
//        document.getElementById('right_col').style.height=maxHeight+'px';
//    }
//    if(document.getElementById('col1') && document.getElementById('col2') && document.getElementById('col3')){
//        var maxHeight = Math.max(document.getElementById('col1').scrollHeight,document.getElementById('col2').scrollHeight,document.getElementById('col3').scrollHeight);
//        if(document.getElementById('left_col') && document.getElementById('right_col')){
//            var maxHeight = Math.max(document.getElementById('left_col').scrollHeight,document.getElementById('right_col').scrollHeight,maxHeight);
//        }
//        document.getElementById('col1').style.height=maxHeight+'px';
//        document.getElementById('col2').style.height=maxHeight+'px';
//        document.getElementById('col3').style.height=maxHeight+'px';
//    }
//    if(document.getElementById('col1') && document.getElementById('col3')){
//        var maxHeight = Math.max(document.getElementById('col1').scrollHeight,document.getElementById('col3').scrollHeight);
//        document.getElementById('col1').style.height=maxHeight+'px';
//        document.getElementById('col3').style.height=maxHeight+'px';
// //       alert("equalized: maxHeight = " + maxHeight);
//    }
//}
//
//window.onload=equalize;

function process_link_kinds(event_id) {
    if($F('link_kind_ids').indexOf(event_id) != -1){
        $('dates').show();
    }
    else {
        $('dates').hide();
    }
}

function setup_expand_collapse(section) {
    Element.observe("head_"+section, 'click', function(){
        if($("head_"+section).hasClassName('section_head_expanded')){
            $("head_"+section).addClassName('section_head_collapsed');
            $("head_"+section).removeClassName('section_head_expanded');
            $("section_"+section).hide();
            setTall();
//            equalize();
        }
        else {
            $("head_"+section).addClassName('section_head_expanded');
            $("head_"+section).removeClassName('section_head_collapsed');
            $("section_"+section).show();
            setTall();
//            equalize();
        }
    })
}
