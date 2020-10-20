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

/* Explanation for the JS within the dynamically generated remove button:
There are 3 instances of the same div id. 1 on the left panel, right panel and bottom panel.  
When the button is executed, I've repeated the code 3 times so it removes each instance of the same div.  */

    var  leftElement = document.createElement("div");
leftElement.innerHTML = "</br><span style='color:#757575;'>&lt;</span>\
<span style='color:#4a8acc;'>h3</span>\
<span style='color:#89e1fd;'> style</span>=\
<span style='color:#d28a68;'>'color: #000000; font-size: 18px; text-transform: none; font-weight: bold;'</span>\
<span style='color:#757575;'>&gt;</span></br>\
<input type='text' id='title"+h3Count+"' placeholder='Enter Title'/ >\
</br><span style='color:#757575;'>&lt;/</span>\
<span style='color:#4a8acc;'>h3</span>\
<span style='color:#757575;'>&gt;</span></br></br>\
<span style='color:#757575;'>&lt;</span>\
<span style='color:#4a8acc;'>p</span>\
<span style='color:#89e1fd';> style</span>=\
<span style='color:#d28a68'>'padding: 0px; max-width:80%;'</span>\
<span style='color:#757575;'>&gt;</span></br/br>\
<textarea placeholder='Enter Content Here' rows='4' cols='50' id='content"+contentCount+"'></textarea>\
</br></br><span style='color:#757575;'>&lt;/</span>\
<span style='color:#4a8acc;'>p</span>\
<span style='color:#757575;'>&gt;</span>\
<button id='remove' onClick='document.getElementById(\"el"+h3Count+"\").parentNode.removeChild(document.getElementById(\"el"+h3Count+"\"));\
document.getElementById(\"el"+h3Count+"\").parentNode.removeChild(document.getElementById(\"el"+h3Count+"\"));\
document.getElementById(\"el"+h3Count+"\").parentNode.removeChild(document.getElementById(\"el"+h3Count+"\"));'>Delete Section</button>";
leftElement.id = "el" + h3Count;
leftElement.style.color = "white";
leftElement.style.borderBottom = "solid #636363 1px";
leftElement.style.paddingBottom = "25px";





var left = document.getElementsByClassName("main-body")[0];
left.appendChild(leftElement);

var rightElement = document.createElement("div");
rightElement.id = "el" + h3Count;
var right = document.getElementsByClassName("right-panel")[0];
right.appendChild(rightElement);

var bottomElement = document.createElement("div");
bottomElement.id = "el" + h3Count;
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
// Update - I don't know why this is an experiment.
// Lesson learnt to comment properly.
 document.getElementsByClassName("bottom-panel")[0].addEventListener("mouseenter",function(){


    var rightReplace = content.value.replace(/\n/g, "<br />")
    .replace(/\[b]/g, "<b>")
    .replace(/\[\/b]/g, "</b>")
    .replace(/\[note]/g, "Please note:");

    var bottomReplace = content.value.replace(/\n/g, "<br />")
                                    .replace(/\[b]/g, "&lt;b>")
                                    .replace(/\[\/b]/g, "&lt;/b>")
                                    .replace(/\[note]/g, "Please note:");


    rightElement.innerHTML = "<center><h3>" + title.value + "</h3>" + "<p style='padding: 0px; max-width:80%;font-size:13px;'>" + rightReplace + "</p>";
    bottomElement.innerHTML = "&lt;h3 style='color: #000000; font-size: 18px; text-transform: none; font-weight: bold;'&gt;" + title.value + "&lt;/h3&gt;" + "&lt;p style='padding: 0px; max-width:80%;'&gt;" + bottomReplace + "&lt;/p&gt;";

});
 // ######


document.getElementById("title"+h3Count).addEventListener("keyup",function(){

    rightElement.innerHTML = "<center><h3>" + title.value + "</h3>" + "<p style='padding: 0px; max-width:80%;font-size:13px;'>" + content.value.replace(/\n/g, "<br />") + "</p>";
    bottomElement.innerHTML = "&lt;h3 style='color: #000000; font-size: 18px; text-transform: none; font-weight: bold;'&gt;" + title.value + "&lt;/h3&gt;" + "&lt;p style='padding: 0px; max-width:80%;'&gt;" + content.value.replace(/\n/g, "<br />") + "&lt;/p&gt;";

});
document.getElementById("content"+contentCount).addEventListener("keyup",function(){
    
    var rightReplace = content.value.replace(/\n/g, "<br />")
    .replace(/\[b]/g, "<b>")
    .replace(/\[\/b]/g, "</b>")
    .replace(/\[note]/g, "Please note:");

    var bottomReplace = content.value.replace(/\n/g, "<br />")
                                    .replace(/\[b]/g, "&lt;b>")
                                    .replace(/\[\/b]/g, "&lt;/b>")
                                    .replace(/\[note]/g, "Please note:");
                                    
    bottom.style.fontSize = "1em";
    rightElement.innerHTML = "<center><h3>" + title.value + "</h3>" + "<p style='padding: 0px; max-width:80%;font-size:13px;'>" + rightReplace + "</p>";
    bottomElement.innerHTML = "&lt;h3 style='color: #000000; font-size: 18px; text-transform: none; font-weight: bold;'&gt;" + title.value + "&lt;/h3&gt;" + "&lt;p style='padding: 0px; max-width:80%;'&gt;" + bottomReplace + "&lt;/p&gt;";

   

});

}



// Dragbar

let leftResize = false;
let xLeft = 0;

const leftContain = document.getElementsByClassName("left-drag")[0];

leftContain.addEventListener("mousedown", e => {
    leftResize = true;


document.addEventListener("mousemove", e => {
    xLeft = e.pageX;
  
  
    if(leftResize === true){
       
        document.getElementsByClassName("left-panel")[0].style.width = xLeft + "px";
        document.body.style.cursor = "ew-resize";
    
    }
    
    });

});



document.body.addEventListener("mouseup", e => {
    if(leftResize === true){
        leftResize = false;
        document.body.style.cursor = "initial";
    }
    
    })


let bottomResize = false;
let xBottom = 0;

const bottomContain = document.getElementsByClassName("bottom-drag")[0];

bottomContain.addEventListener("mousedown", e => {
    bottomResize = true;


document.addEventListener("mousemove", e => {
    xBottom = e.pageY - 50;
  
  
    if(bottomResize === true){
       
        document.getElementsByClassName("row-flex")[0].style.height = xBottom + "px";
        document.body.style.cursor = "ns-resize";
      
    
    }
    
    });

});



document.body.addEventListener("mouseup", e => {
    if(bottomResize === true){
        bottomResize = false;
        document.body.style.cursor = "initial";
        console.log(e.pageY);
    }

})


function clipBoard() {
    var range = document.createRange();
    range.selectNode(document.getElementsByClassName("bottom-panel")[0]);
    window.getSelection().removeAllRanges(); // clear current selection
    window.getSelection().addRange(range); // to select text
    document.execCommand("copy"); //copy selection

}
