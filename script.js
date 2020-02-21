var centerstart = "<span style='color:#757575;'>&lt;</span><span style='color:red;'>center</span><span style='color:#757575;'>&gt;</span>";
var centerend = "</br><span style='color:#757575;'>&lt;/</span><span style='color:red;'>center</span><span style='color:#757575;'>&gt;</span></br>";
var centerstartbottom = "&lt;center&gt;";
var centerendbottom = "&lt;/center&gt;";       
 
document.getElementsByClassName("center-start")[0].innerHTML = centerstart;
document.getElementsByClassName("center-end")[0].innerHTML = centerend;
document.getElementsByClassName("center-start-bottom")[0].innerHTML = centerstartbottom;
document.getElementsByClassName("center-end-bottom")[0].innerHTML = centerendbottom;



var h3Count = 0;
var contentCount = 0;


function newSection(){

h3Count++;
contentCount++;

    var  leftElement = document.createElement("div");
leftElement.innerHTML = "</br><span style='color:#757575;'>&lt;</span>\
<span style='color:#4a8acc;'>h3</span>\
<span style='color:#89e1fd;'> style</span>=\
<span style='color:#d28a68;'>'color: #000000; font-size: 18px; text-transform: none; font-weight: bold;'</span>\
<span style='color:#757575;'>&gt;</span></br>\
<input type='text' id='title"+h3Count+"' placeholder='Enter Title'/>\
</br><span style='color:#757575;'>&lt;/</span>\
<span style='color:#4a8acc;'>h3</span>\
<span style='color:#757575;'>&gt;</span></br></br>\
<span style='color:#757575;'>&lt;</span>\
<span style='color:#4a8acc;'>p</span>\
<span style='color:#89e1fd';> style</span>=\
<span style='color:#d28a68'>'padding: 0px; max-width:80%;'</span>\
<span style='color:#757575;'>&gt;</span></br></br>\
<textarea placeholder='Enter Content Here' rows='4' cols='50' id='content"+contentCount+"'></textarea>\
</br></br><span style='color:#757575;'>&lt;/</span>\
<span style='color:#4a8acc;'>p</span>\
<span style='color:#757575;'>&gt;</span>";
leftElement.style.color = "white";


var left = document.getElementsByClassName("main-body")[0];
left.appendChild(leftElement);

var rightElement = document.createElement("div");
var right = document.getElementsByClassName("right-panel")[0];
right.appendChild(rightElement);

var bottomElement = document.createElement("div");
var bottom = document.getElementsByClassName("bottom-panel-main")[0];
bottom.appendChild(bottomElement);

var title = document.getElementById("title"+h3Count);
var content = document.getElementById("content"+contentCount);

title.style.paddingLeft = "10px";
title.style.margin = "15px";
title.style.overflow = "hidden";
title.style.width = "-webkit-fill-available";
title.style.border = "none";
title.style.height = "50px";
title.style.background = "#313131";
title.style.color = "white";

content.style.paddingLeft = "10px";
content.style.margin = "15px";
content.style.overflow = "hidden";
content.style.width = "-webkit-fill-available";
content.style.border = "none";
content.style.background = "#313131";
content.style.color = "white";
content.style.fontSize = "13px";

// Experiment
 document.body.addEventListener("mouseenter",function(){

    rightElement.innerHTML = "<center><h3>" + title.value + "</h3>" + "<p style='padding: 0px; max-width:80%;font-size:13px;'>" + content.value.replace(/\n/g, "<br />") + "</p>";
    bottomElement.innerHTML = "&lt;h3 style='color: #000000; font-size: 18px; text-transform: none; font-weight: bold;'&gt;" + title.value + "&lt;/h3&gt;" + "&lt;p style='padding: 0px; max-width:80%;'&gt;" + content.value.replace(/\n/g, "<br />") + "&lt;/p&gt;";

});
 // ######


document.getElementById("title"+h3Count).addEventListener("keyup",function(){

    rightElement.innerHTML = "<center><h3>" + title.value + "</h3>" + "<p style='padding: 0px; max-width:80%;font-size:13px;'>" + content.value.replace(/\n/g, "<br />") + "</p>";
    bottomElement.innerHTML = "&lt;h3 style='color: #000000; font-size: 18px; text-transform: none; font-weight: bold;'&gt;" + title.value + "&lt;/h3&gt;" + "&lt;p style='padding: 0px; max-width:80%;'&gt;" + content.value.replace(/\n/g, "<br />") + "&lt;/p&gt;";

});
document.getElementById("content"+contentCount).addEventListener("keyup",function(){
    bottom.style.fontSize = "1em";
    rightElement.innerHTML = "<center><h3>" + title.value + "</h3>" + "<p style='padding: 0px; max-width:80%;font-size:13px;'>" + content.value.replace(/\n/g, "<br />") + "</p>";
    bottomElement.innerHTML = "&lt;h3 style='color: #000000; font-size: 18px; text-transform: none; font-weight: bold;'&gt;" + title.value + "&lt;/h3&gt;" + "&lt;p style='padding: 0px; max-width:80%;'&gt;" + content.value.replace(/\n/g, "<br />") + "&lt;/p&gt;";
});

}

