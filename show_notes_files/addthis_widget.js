var _atu="undefined";
if(typeof _atw==="undefined"){
try{
new Image().src="http://s7.addthis.com/cs/load-1.png?CXNID=2000001.5215456080540439072NXC";
}
catch(e){
}
var _atw={host:"http://s7.addthis.com/",serv:"http://s7.addthis.com/services/",path:"http://s7.addthis.com/select/",list:{"ask":["Ask","ask.png"],"delicious":["Del.icio.us","delicious.png"],"digg":["Digg","digg.png"],"email":["Email","email.png"],"favorites":["Favorites","favorites.png"],"facebook":["Facebook","facebook.gif"],"fark":["Fark","fark.png"],"furl":["Furl","furl.gif"],"google":["Google","goog.png"],"live":["Live","live.gif"],"myspace":["MySpace","myspace.png"],"myweb":["Yahoo MyWeb","yahoo-myweb.png"],"newsvine":["Newsvine","newsvine.png"],"reddit":["Reddit","reddit.gif"],"sk*rt":["Sk*rt","skrt.gif"],"slashdot":["Slashdot","slashdot.png"],"stumbleupon":["StumbleUpon","su.png"],"stylehive":["Stylehive","stylehive.gif"],"tailrank":["Tailrank","tailrank2.png"],"technorati":["Technorati","technorati.png"],"thisnext":["ThisNext","thisnext.gif"],"twitter":["Twitter","twitter.gif"],"ballhype":["BallHype","ballhype.png"],"yardbarker":["Yardbarker","yardbarker.png"],"kaboodle":["Kaboodle","kaboodle.gif"],"more":["More ...","more.gif"]},get:function(id){
return document.getElementById(id);
},xwait:function(){
if(_atw.cwait!==null){
clearTimeout(_atw.cwait);
}
},cwait:null,odone:false,divid:"addthis_dropdown15",close:function(){
var _2=_atw.get(_atw.divid);
if(_2){
_2.style.display="none";
}
var e=document.getElementsByTagName("embed");
if(e&&addthis_hide_embed){
for(i=0;i<e.length;i++){
if(e[i].addthis_hidden){
e[i].style.visibility="visible";
}
}
}
return false;
},ckto:function(_4){
_4.style.color="#000000";
if(_4.value==" email address"){
_4.value="";
}
},show:function(_5){
var _6=_atw.get("at_share"),_7=_atw.get("at_email"),_8=_atw.get("at_caption"),_9=_atw.get("at_success");
_6.style.display="none";
_7.style.display="none";
_9.innerHTML="";
if(_5=="share"||_5==""){
_6.style.display="block";
_8.innerHTML=addthis_caption_share;
}else{
_7.style.display="block";
_8.innerHTML=addthis_caption_email;
}
},genurl:function(_a){
var _b=encodeURIComponent,_c=_b(addthis_url),_d=_b(addthis_title),_e=_b(addthis_logo);
return "http://www.addthis.com/bookmark.php?v=15&winname=addthis&pub="+addthis_pub+"&s="+_a+"&url="+_c+"&title="+_d+"&logo="+_e+"&logobg="+addthis_logo_background+"&logocolor="+addthis_logo_color;
},cumulpos:function(a){
var b=0,c=0;
do{
b+=a.offsetTop||0;
c+=a.offsetLeft||0;
a=a.offsetParent;
}while(a);
return [c,b];
},wsize:function(){
var w=window,d=document,de=d.documentElement,db=d.body;
if(typeof (w.innerWidth)=="number"){
return [w.innerWidth,w.innerHeight];
}else{
if(de&&(de.clientWidth||de.clientHeight)){
return [de.clientWidth,de.clientHeight];
}else{
if(db&&(db.clientWidth||db.clientHeight)){
return [db.clientWidth,db.clientHeight];
}else{
return [0,0];
}
}
}
},spos:function(){
var w=window,d=document,de=d.documentElement,db=d.body;
if(typeof (w.pageYOffset)=="number"){
return [w.pageXOffset,w.pageYOffset];
}else{
if(db&&(db.scrollLeft||db.scrollTop)){
return [db.scrollLeft,db.scrollTop];
}else{
if(de&&(de.scrollLeft||de.scrollTop)){
return [de.scrollLeft,de.scrollTop];
}else{
return [0,0];
}
}
}
}};
function addthis_open(elt,_1b,_1c,_1d){
try{
new Image().src="http://s7.addthis.com/cs/show-1.png?CXNID=2000001.5215456080540439073NXC";
}
catch(e){
}
_atw.xwait();
addthis_url=_1c;
addthis_title=_1d;
if(addthis_url===""||addthis_url==="[URL]"){
addthis_url=location.href;
}
if(addthis_title===""||addthis_title==="[TITLE]"){
addthis_title=document.title;
}
var _1f=16;
var _20=elt.getElementsByTagName("img");
if(_20&&_20[0]){
elt=_20[0];
_1f=0;
}
_atw.show(_1b);
var _21=_atw.cumulpos(elt),_22=_21[0]+addthis_offset_left,_23=_21[1]+_1f+1+addthis_offset_top,_24=_atw.wsize(),_25=_atw.spos(),_26=_atw.get(_atw.divid);
_26.style.display="block";
if(_22-_25[0]+_26.clientWidth+20>_24[0]){
_22=_22-_26.clientWidth+50;
}
if(_23-_25[1]+_26.clientHeight+elt.clientHeight+20>_24[1]){
_23=_23-_26.clientHeight-20;
}
_26.style.left=_22+"px";
_26.style.top=(_23+elt.clientHeight)+"px";
if(addthis_hide_embed){
var _27=_22+_26.clientWidth;
var _28=_23+_26.clientHeight;
var e=document.getElementsByTagName("embed");
var _29=0,_2a=0,_2b=0;
for(i=0;i<e.length;i++){
_29=_atw.cumulpos(e[i]);
_2a=_29[0];
_2b=_29[1];
if(_22<_2a+e[i].clientWidth&&_23<_2b+e[i].clientHeight){
if(_27>_2a&&_28>_2b){
if(e[i].style.visibility!="hidden"){
e[i].addthis_hidden=true;
e[i].style.visibility="hidden";
}
}
}
}
}
if(!_atw.odone){
var _2d=addthis_options.replace(/\s/g,"");
var _2e=_2d.split(",");
for(var i=0;i<_2e.length;i++){
var _2f=_2e[i];
if(_2f in _atw.list){
var bms=_atw.get("addthis_"+_2f+"15");
if(bms){
bms.src=_atw.serv+_atw.list[_2f][1];
}
}
}
_atw.odone=true;
}
return false;
}
function addthis_close(){
_atw.cwait=setTimeout("_atw.close()",500);
}
function addthis_sendto(_31){
if(_31==="email"){
_atw.show(_31);
return false;
}
_atw.close();
if(_31==="favorites"){
if(document.all){
window.external.AddFavorite(addthis_url,addthis_title);
}else{
window.sidebar.addPanel(addthis_title,addthis_url,"");
}
return false;
}
if(_31==="stumbleupon"){
_31="su";
}
if(_31==="sk*rt"){
_31="skrt";
}
window.open(_atw.genurl(_31),"addthis","scrollbars=yes,menubar=no,width=620,height=500,resizable=yes,toolbar=no,location=no,status=no");
return false;
}
function addthis_send(){
var _32=_atw.get("at_from"),_33=_atw.get("at_to"),_34=_atw.get("at_img"),_35=_atw.get("at_success"),_36=_atw.get("at_msg"),euc=encodeURIComponent;
if(_32.value.indexOf("@")<0||_33.value.indexOf("@")<0||_32.value.indexOf(".")<0||_33.value.indexOf(".")<0){
alert("Please enter a valid email address!");
return;
}
_rnd=Math.random();
_url="http://www.addthis.com/tellfriend.php?pub="+euc(addthis_pub)+"&url="+euc(addthis_url)+"&fromname=aaa&fromemail="+euc(_32.value)+"&tofriend="+euc(_33.value)+"&note="+euc(_36.value)+"&r="+_rnd;
_34.src=_url;
_35.innerHTML="Message Sent!";
_atw.cwait=setTimeout("_atw.close()",1200);
return false;
}
(function(){
try{
if(typeof addthis_pub===_atu){
addthis_pub="";
}
if(typeof addthis_caption===_atu){
addthis_caption="Bookmark &amp Share";
}
if(typeof addthis_brand===_atu){
addthis_brand="";
}
if(typeof addthis_logo===_atu){
addthis_logo="";
}
if(typeof addthis_logo_background===_atu){
addthis_logo_background="";
}
if(typeof addthis_logo_color===_atu){
addthis_logo_color="";
}
if(typeof addthis_options===_atu){
addthis_options="favorites, digg, delicious, google, myspace, facebook, reddit, newsvine, live, more";
}
if(typeof addthis_offset_top!=="number"){
addthis_offset_top=0;
}
if(typeof addthis_offset_left!=="number"){
addthis_offset_left=0;
}
if(typeof addthis_caption_share===_atu){
addthis_caption_share="Bookmark &amp; Share";
}
if(typeof addthis_caption_email===_atu){
addthis_caption_email="Email a Friend";
}
if(typeof addthis_css===_atu){
addthis_css=_atw.host+"css/152/addthis_widget.css";
}
if(typeof addthis_hide_embed===_atu){
addthis_hide_embed=true;
}
addthis_options=addthis_options.replace(/\s/g,"");
var d=document,_39=d.createElement("link");
_39.rel="stylesheet";
_39.type="text/css";
_39.href=addthis_css;
_39.media="all";
d.lastChild.firstChild.appendChild(_39);
var str="<div id=\""+_atw.divid+"\" onmouseover=\"_atw.xwait()\" onmouseout=\"addthis_close()\" style=\"z-index:1000000;position:absolute;display:none\">";
str+="<table width=\"100%\" cellpadding=\"2\" cellspacing=\"0\" style=\"background-color:#EEEEEE;height:18px\">";
str+="<tr><td style=\"font-size:12px;color:#666666;padding-left:3px\"><span id=\"at_caption\">Bookmark&nbsp;&amp;&nbsp;Share</span></td><td align=\"right\" style=\"font-size:9px;color:#666666;padding-right:3px\">"+addthis_brand+"</td></tr>";
str+="</table>";
var _3b=false;
str+="<div id=\"at_share\">";
str+="<table id=\"addthis_services\" width=\"100%\" cellpadding=\"0\" style=\"font-family:Verdana, Arial;font-size:11px\">";
str+="<tr><td colspan=\"2\" style=\"height:0px\"></td></tr>";
var _3c=addthis_options.split(",");
for(var i=0;i<_3c.length;i++){
var _3e=_3c[i];
if(_3e in _atw.list){
if(!_3b){
str+="<tr>";
}
str+="<td width=\"50%\" style=\"height:19px\"><a href=\"/\" onclick=\"return addthis_sendto('"+_3e+"');\"><img id=\"addthis_"+_3e+"15\" alt=\"\" width=\"16\" height=\"16\" />&nbsp;"+_atw.list[_3e][0]+"</a></td>";
if(_3b){
str+="</tr>";
}
_3b=!_3b;
}
}
if(_3b){
str+="<td></td></tr>";
}
str+="<tr><td colspan=\"2\" style=\"height:2px\"></td></tr>";
str+="</table>";
str+="</div>\n";
str+="<div id=\"at_email\" style=\"display:none;font-size:11px;padding-left:20px;padding-top:6px\">";
str+="<table border=\"0\">";
var in1="<tr><td style=\"font-size:12px\"";
var in2="style=\"width:130px;height:18px;font-size:11px;font-family:Arial;color:#999999\" value=\" email address\" onfocus=\"_atw.ckto(this)\" /></td></tr>";
str+=in1+">To:</td><td><input id=\"at_to\" type=\"text\" "+in2;
str+=in1+">From:</td><td><input id=\"at_from\" type=\"text\" "+in2;
str+=in1+" valign=\"top\">Note:</td><td><textarea id=\"at_msg\" style=\"width:130px;height:36px;font-size:11px;font-family:Arial;\"/></textarea></td></tr>";
str+="<tr><td colspan=\"2\" align=\"right\"><span id=\"at_success\" style=\"font-size:10px;color:#777777;\"></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type=\"button\" value=\"Send\" onclick=\"return addthis_send()\" style=\"font-size:9px\"/></td></tr>";
str+="</table>";
str+="</div>\n";
str+="<table width=\"100%\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\" style=\"background-color:#EEEEEE\">";
str+="<tr><td colspan=\"2\" align=\"right\" style=\"padding:0px;padding-right:10px;height:11px\"><img id=\"at_img\" src=\""+_atw.path+"select_load.png\" style=\"width:1px;height:1px\" /><a href=\"http://www.addthis.com\" target=\"_blank\" style=\"height:6px;padding:0px\"><img src=\""+_atw.serv+"addthis-mini.gif\" border=\"0\" style=\"padding:0px;width:50px;height:9px\" alt=\"\" /></a></td></tr>";
str+="</table>\n";
str+="</div>\n";
div=d.createElement("div");
div.innerHTML=str;
d.body.insertBefore(div,d.body.firstChild);
div.style.zIndex=1000000;
}
catch(e){
}
})();
}

