var featureTog = false; 

function featureToggle(){
    


    featureTog = !featureTog; 
          
       if(featureTog){
           document.getElementById("feature-contain").style.display = "block";
       } else{
        document.getElementById("feature-contain").style.display = "none";
       }
    


}



var features = document.getElementById("features");
var bullets = document.getElementById("bullets");
var featureArray = [];

document.getElementById("features").addEventListener("keyup", function(){



// Add item to array upon producing a new line, then join the array
// as a whole, changing the commas for a bullet point on each new line.
featureArray = "&bull; " + features.value.split(/\n/).join("<br />&bull; ")


    if(featureArray != null){
     // The results with a space regex to remove multiple space uses.
     // Will remove if it becomes annoying.
        bullets.innerHTML = featureArray.replace(/  +/g, ' ');
 
    } 

 
})



//Logic for moving the feature box.

let moving = false;
let x = 0;
let y = 0;
const featureContain = document.getElementsByClassName("feature-title")[0];

featureContain.addEventListener("mousedown", e => {
    moving = true;
 

document.addEventListener("mousemove", e => {
    x = e.pageX - 250;
    y = e.pageY - 20;
  
    if(moving === true){
       
        document.getElementById("feature-contain").style.marginLeft = x + "px";
        document.getElementById("feature-contain").style.marginTop = y + "px";
    
    }
    
    });

});



featureContain.addEventListener("mouseup", e => {
    if(moving === true){
         moving = false;
    }
    
    })
