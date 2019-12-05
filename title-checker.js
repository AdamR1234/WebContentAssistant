var titleTog = false; 

function titleToggle(){
    


    titleTog = !titleTog; 
          
       if(titleTog){
           document.getElementById("title-contain").style.display = "block";
       } else{
        document.getElementById("title-contain").style.display = "none";
       }
    


}


document.getElementsByClassName("long-count")[0].innerHTML = "Long: 0";
document.getElementsByClassName("short-count")[0].innerHTML = "Short: 0";


var shortCount =  document.getElementById("short");
var shortTitle = document.getElementsByClassName("short-title")[0];
var shortStatus = document.getElementsByClassName("short-status")[0];

document.getElementById("short").addEventListener("keyup", function(){

    document.getElementsByClassName("short-count")[0].innerHTML = "Short: " + shortCount.value.length;
    document.getElementsByClassName("short-title")[0].innerHTML = "<Legend style='color:white;'>Short Title</Legend>" + shortCount.value;


            if(shortCount.value.length < 1){
                shortCount.style.backgroundColor = "#232323";
                shortTitle.style.color = "#cccccc";
                shortStatus.innerHTML = "Short Status: <span style='color:#71ff6f;'>Good</span>";
                document.getElementsByClassName("short-title")[0].innerHTML = "<Legend style='color:white;'>Short Title</Legend>Your short title will appear here.";
            }
            else if(shortCount.value.length <= 90){
                shortCount.style.backgroundColor = "rgb(29, 82, 37)";
                shortTitle.style.color = "#71ff6f";
                shortStatus.innerHTML = "Short Status: <span style='color:#71ff6f;'>Good</span>";
            }
            else {
                 shortCount.style.backgroundColor = "rgb(82, 29, 29)";
                 shortTitle.style.color = "#ff3030";
                 shortStatus.innerHTML = "Short Status: <span style='color:#ff0000;'>Bad</span>";
            }

            if(shortCount.value.length > 200){
                shortCount.innerHTML = document.getElementsByClassName("short-title")[0].innerHTML = 
                "<Legend style='color:white;'>Short Title</Legend>You have greatly exceeded the required amount of letters.<br />Please remove some letters to continue.";
            }


});




var longCount =  document.getElementById("long");
var longTitle = document.getElementsByClassName("long-title")[0];
var longStatus = document.getElementsByClassName("long-status")[0];

document.getElementById("long").addEventListener("keyup", function(){

    document.getElementsByClassName("long-count")[0].innerHTML = "Long: " + longCount.value.length;
    document.getElementsByClassName("long-title")[0].innerHTML = "<Legend style='color:white;'>Long Title</Legend>" + longCount.value;


        if(longCount.value.length < 1){
            longCount.style.backgroundColor = "#232323";
            longTitle.style.color = "#cccccc";
            longStatus.innerHTML = "Long Status: <span style='color:#71ff6f;'>Good</span>";
            document.getElementsByClassName("long-title")[0].innerHTML = "<Legend style='color:white;'>Long Title</Legend>Your long title will appear here.";
        }
        else if(longCount.value.length <= 120){
            longCount.style.backgroundColor = "rgb(29, 82, 37)";
            longTitle.style.color = "#71ff6f";
            longStatus.innerHTML = "Long Status: <span style='color:#71ff6f;'>Good</span>";
        }
        else {
            longCount.style.backgroundColor = "rgb(82, 29, 29)";
            longTitle.style.color = "#ff3030";
            longStatus.innerHTML = "Long Status: <span style='color:#ff0000;'>Bad</span>";
        }


        if(longCount.value.length > 200){
            longCount.innerHTML = document.getElementsByClassName("long-title")[0].innerHTML = 
            "<Legend style='color:white;'>Short Title</Legend>You have greatly exceeded the required amount of letters.<br />Please remove some letters to continue.";
        }


 });



 function clearTitle(){
     longCount.value = "";
     document.getElementsByClassName("long-count")[0].innerHTML = "Long: 0";
     longCount.style.backgroundColor = "#232323";
     longTitle.style.color = "#cccccc";
     longTitle.innerHTML = "<Legend style='color:white;'>Long Title</Legend>Your long title will appear here.";
     longStatus.innerHTML = "Long Status: <span style='color:#71ff6f;'>Good</span>";
     shortCount.value = "";
     document.getElementsByClassName("short-count")[0].innerHTML = "Short: 0";
     shortCount.style.backgroundColor = "#232323";
     shortTitle.style.color = "#cccccc";
     shortTitle.innerHTML = "<Legend style='color:white;'>Short Title</Legend>Your short title will appear here.";
     shortStatus.innerHTML = "Short Status: <span style='color:#71ff6f;'>Good</span>";

 }
 
 

// Make it move

let movingTitle = false;
let xTitle = 0;
let yTitle = 0;
const titleContain = document.getElementsByClassName("title-title")[0];

titleContain.addEventListener("mousedown", e => {
    movingTitle = true;
    document.getElementById("title-contain").style.zIndex = "1000";
    document.getElementById("feature-contain").style.zIndex = "1";

document.addEventListener("mousemove", e => {
    xTitle = e.pageX - 250;
    yTitle = e.pageY - 20;
  
    if(movingTitle === true){
       
        document.getElementById("title-contain").style.marginLeft = xTitle + "px";
        document.getElementById("title-contain").style.marginTop = yTitle + "px";
    
    }
    
    });

});



titleContain.addEventListener("mouseup", e => {
    if(movingTitle === true){
        movingTitle = false;
    }
    
    })
