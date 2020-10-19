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
featureArray = "&bull; " + features.value.split(/\n/).join(".<br />&bull; ")


    if(featureArray != null){
     // The results with a space regex to remove multiple space uses.
     // Will remove if it becomes annoying.
        bullets.innerHTML = featureArray.replace(/  +/g, ' ');
 
    } 

 
})



//Logic for moving the feature box.

let movingBullet = false;
let xBullet = 0;
let yBullet = 0;
const featureContain = document.getElementsByClassName("feature-top")[0];


featureContain.addEventListener("mousedown", e => {
    movingBullet = true;
    document.getElementById("feature-contain").style.zIndex = "1000";
    document.getElementById("title-contain").style.zIndex = "1";

document.addEventListener("mousemove", e => {
    xBullet = e.pageX - 250;
    yBullet = e.pageY - 20;
  
    if(movingBullet === true){
       
        document.getElementById("feature-contain").style.marginLeft = xBullet + "px";
        document.getElementById("feature-contain").style.marginTop = yBullet + "px";
    
    }
    
    });

});



featureContain.addEventListener("mouseup", e => {
    if(movingBullet === true){
        movingBullet = false;
    
    }
    
    })

    
