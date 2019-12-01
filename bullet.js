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