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

  
    document.getElementsByClassName("short-count")[0].innerHTML = "Short: " + shortCount.value.replace(/ +/g, ' ').length;
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

   
    document.getElementsByClassName("long-count")[0].innerHTML = "Long: " + longCount.value.replace(/ +/g, ' ').length;
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
 
 function amdCPU(){

    document.getElementById("long").value = "AMD Ryzen™ 9 3950X, AM4, Zen 2, 16 Core, 32 Thread, 3.5GHz, 4.7GHz Turbo, 64MB L3, PCIe 4.0, 105W, CPU";
    document.getElementsByClassName("long-count")[0].innerHTML = "Long: " + longCount.value.replace(/ +/g, ' ').length;
    document.getElementsByClassName("long-title")[0].innerHTML = "<Legend style='color:white;'>Long Title</Legend>AMD Ryzen™ 9 3950X, AM4, Zen 2, 16 Core, 32 Thread, 3.5GHz, 4.7GHz Turbo, 64MB L3, PCIe 4.0, 105W, CPU";
    

    document.getElementById("short").value = "AMD Ryzen 9 3950X Gen3 16 Core AM4 CPU/Processor";
    document.getElementsByClassName("short-title")[0].innerHTML = "<Legend style='color:white;'>Short Title</Legend>AMD Ryzen 9 3950X Gen3 16 Core AM4 CPU/Processor";
    document.getElementsByClassName("short-count")[0].innerHTML = "Short: " + shortCount.value.replace(/ +/g, ' ').length;

    longStatus.innerHTML = "Long Status: <span style='color:#71ff6f;'>Good</span>";
    shortStatus.innerHTML = "Short Status: <span style='color:#71ff6f;'>Good</span>";
    longCount.style.backgroundColor = "rgb(29, 82, 37)";
    longTitle.style.color = "#71ff6f";
    shortCount.style.backgroundColor = "rgb(29, 82, 37)";
    shortTitle.style.color = "#71ff6f";
 }

 function amdServerCPU(){

    document.getElementById("long").value = "AMD EPYC™ 7252P, S SP3, 7nm, Infinity / Zen 2, 8 Core, 16 Thread, 3.1GHz, 3.2GHz Turbo, 64MB, 120W, CPU";
    document.getElementsByClassName("long-count")[0].innerHTML = "Long: " + longCount.value.replace(/ +/g, ' ').length;
    document.getElementsByClassName("long-title")[0].innerHTML = "<Legend style='color:white;'>Long Title</Legend>AMD EPYC™ 7252P, S SP3, 7nm, Infinity / Zen 2, 8 Core, 16 Thread, 3.1GHz, 3.2GHz Turbo, 64MB, 120W, CPU";
    

    document.getElementById("short").value = "AMD 8 Core 2nd Gen EPYC™ 7252P Single Socket PCIe 4.0 Server CPU/Processor";
    document.getElementsByClassName("short-title")[0].innerHTML = "<Legend style='color:white;'>Short Title</Legend>AMD 8 Core 2nd Gen EPYC™ 7252P Single Socket PCIe 4.0 Server CPU/Processor";
    document.getElementsByClassName("short-count")[0].innerHTML = "Short: " + shortCount.value.replace(/ +/g, ' ').length;

    longStatus.innerHTML = "Long Status: <span style='color:#71ff6f;'>Good</span>";
    shortStatus.innerHTML = "Short Status: <span style='color:#71ff6f;'>Good</span>";
    longCount.style.backgroundColor = "rgb(29, 82, 37)";
    longTitle.style.color = "#71ff6f";
    shortCount.style.backgroundColor = "rgb(29, 82, 37)";
    shortTitle.style.color = "#71ff6f";
 }

 function intelCPU(){

    document.getElementById("long").value = "Intel Core i9 9900K, S 1151, Coffee Lake Refresh, 8 Core, 16 Thread, 3.6GHz, 5.0GHz Turbo, 16MB, 1200MHz GPU, 95W, Box";
    document.getElementsByClassName("long-count")[0].innerHTML = "Long: " + longCount.value.replace(/ +/g, ' ').length;
    document.getElementsByClassName("long-title")[0].innerHTML = "<Legend style='color:white;'>Long Title</Legend>Intel Core i9 9900K, S 1151, Coffee Lake Refresh, 8 Core, 16 Thread, 3.6GHz, 5.0GHz Turbo, 16MB, 1200MHz GPU, 95W, Box";
    

    document.getElementById("short").value = "Intel Core i9 9900K Unlocked 9th Gen Desktop Processor/CPU Retail";
    document.getElementsByClassName("short-title")[0].innerHTML = "<Legend style='color:white;'>Short Title</Legend>Intel Core i9 9900K Unlocked 9th Gen Desktop Processor/CPU Retail";
    document.getElementsByClassName("short-count")[0].innerHTML = "Short: " + shortCount.value.replace(/ +/g, ' ').length;

    longStatus.innerHTML = "Long Status: <span style='color:#71ff6f;'>Good</span>";
    shortStatus.innerHTML = "Short Status: <span style='color:#71ff6f;'>Good</span>";
    longCount.style.backgroundColor = "rgb(29, 82, 37)";
    longTitle.style.color = "#71ff6f";
    shortCount.style.backgroundColor = "rgb(29, 82, 37)";
    shortTitle.style.color = "#71ff6f";
 }

 function intelServerCPU(){

    document.getElementById("long").value = "Intel Xeon W-3275M, S 3647, Cascade Lake-W, 28 Cores, 56 Threads, 2.5GHz, 4.4GHz Turbo, 38.5MB Cache, 205W, Retail";
    document.getElementsByClassName("long-count")[0].innerHTML = "Long: " + longCount.value.replace(/ +/g, ' ').length;
    document.getElementsByClassName("long-title")[0].innerHTML = "<Legend style='color:white;'>Long Title</Legend>Intel Xeon W-3275M, S 3647, Cascade Lake-W, 28 Cores, 56 Threads, 2.5GHz, 4.4GHz Turbo, 38.5MB Cache, 205W, Retail";
    

    document.getElementById("short").value = "Intel 28 Core Xeon W-3275M Pro Creator Workstation CPU/Processor";
    document.getElementsByClassName("short-title")[0].innerHTML = "<Legend style='color:white;'>Short Title</Legend>Intel 28 Core Xeon W-3275M Pro Creator Workstation CPU/Processor";
    document.getElementsByClassName("short-count")[0].innerHTML = "Short: " + shortCount.value.replace(/ +/g, ' ').length;

    longStatus.innerHTML = "Long Status: <span style='color:#71ff6f;'>Good</span>";
    shortStatus.innerHTML = "Short Status: <span style='color:#71ff6f;'>Good</span>";
    longCount.style.backgroundColor = "rgb(29, 82, 37)";
    longTitle.style.color = "#71ff6f";
    shortCount.style.backgroundColor = "rgb(29, 82, 37)";
    shortTitle.style.color = "#71ff6f";
 }


 function cpuWaterCooler(){

    document.getElementById("long").value = "DEEPCOOL CASTLE 360 AIO Cooler, 3x 120mm ARGB Fan, Pure Copper Plate Heatsink, Aluminium 360mm Radiator, Intel/AMD";
    document.getElementsByClassName("long-count")[0].innerHTML = "Long: " + longCount.value.replace(/ +/g, ' ').length;
    document.getElementsByClassName("long-title")[0].innerHTML = "<Legend style='color:white;'>Long Title</Legend>DEEPCOOL CASTLE 360 AIO Cooler, 3x 120mm ARGB Fan, Pure Copper Plate Heatsink, Aluminium 360mm Radiator, Intel/AMD";
    

    document.getElementById("short").value = "DEEPCOOL 360mm CASTLE ARGB Intel/AMD CPU Liquid Cooler";
    document.getElementsByClassName("short-title")[0].innerHTML = "<Legend style='color:white;'>Short Title</Legend>DEEPCOOL 360mm CASTLE ARGB Intel/AMD CPU Liquid Cooler";
    document.getElementsByClassName("short-count")[0].innerHTML = "Short: " + shortCount.value.replace(/ +/g, ' ').length;

    longStatus.innerHTML = "Long Status: <span style='color:#71ff6f;'>Good</span>";
    shortStatus.innerHTML = "Short Status: <span style='color:#71ff6f;'>Good</span>";
    longCount.style.backgroundColor = "rgb(29, 82, 37)";
    longTitle.style.color = "#71ff6f";
    shortCount.style.backgroundColor = "rgb(29, 82, 37)";
    shortTitle.style.color = "#71ff6f";
 }


 function cpuAirCooler(){

    document.getElementById("long").value = "Cooler Master Hyper 212 RGB Black Edition, 1x 120mm RGB Fan, Single Tower, Aluminium Fins, 4x Copper Heatpipes, Intel/AMD";
    document.getElementsByClassName("long-count")[0].innerHTML = "Long: " + longCount.value.replace(/ +/g, ' ').length;
    document.getElementsByClassName("long-title")[0].innerHTML = "<Legend style='color:white;'>Long Title</Legend>Cooler Master Hyper 212 RGB Black Edition, 1x 120mm RGB Fan, Single Tower, Aluminium Fins, 4x Copper Heatpipes, Intel/AMD";
    

    document.getElementById("short").value = "Cooler Master Hyper 212 Black Ed. RGB Intel/AMD CPU Cooler";
    document.getElementsByClassName("short-title")[0].innerHTML = "<Legend style='color:white;'>Short Title</Legend>Cooler Master Hyper 212 Black Ed. RGB Intel/AMD CPU Cooler";
    document.getElementsByClassName("short-count")[0].innerHTML = "Short: " + shortCount.value.replace(/ +/g, ' ').length;

    longStatus.innerHTML = "Long Status: <span style='color:#71ff6f;'>Good</span>";
    shortStatus.innerHTML = "Short Status: <span style='color:#71ff6f;'>Good</span>";
    longCount.style.backgroundColor = "rgb(29, 82, 37)";
    longTitle.style.color = "#71ff6f";
    shortCount.style.backgroundColor = "rgb(29, 82, 37)";
    shortTitle.style.color = "#71ff6f";
 }



 function amdGPU(){

    document.getElementById("long").value = "ASUS Radeon RX 5700 XT ROG STRIX OC 8GB GDDR6 PCIe 4.0 Graphics Card, 7nm RDNA, 2560 Streams, 1770MHz GPU, 2035MHz Boost";
    document.getElementsByClassName("long-count")[0].innerHTML = "Long: " + longCount.value.replace(/ +/g, ' ').length;
    document.getElementsByClassName("long-title")[0].innerHTML = "<Legend style='color:white;'>Long Title</Legend>ASUS Radeon RX 5700 XT ROG STRIX OC 8GB GDDR6 PCIe 4.0 Graphics Card, 7nm RDNA, 2560 Streams, 1770MHz GPU, 2035MHz Boost";
    

    document.getElementById("short").value = "ASUS AMD Radeon RX 5700 XT 8GB ROG STRIX OC GAMING Graphics Card";
    document.getElementsByClassName("short-title")[0].innerHTML = "<Legend style='color:white;'>Short Title</Legend>ASUS AMD Radeon RX 5700 XT 8GB ROG STRIX OC GAMING Graphics Card";
    document.getElementsByClassName("short-count")[0].innerHTML = "Short: " + shortCount.value.replace(/ +/g, ' ').length;

    longStatus.innerHTML = "Long Status: <span style='color:#71ff6f;'>Good</span>";
    shortStatus.innerHTML = "Short Status: <span style='color:#71ff6f;'>Good</span>";
    longCount.style.backgroundColor = "rgb(29, 82, 37)";
    longTitle.style.color = "#71ff6f";
    shortCount.style.backgroundColor = "rgb(29, 82, 37)";
    shortTitle.style.color = "#71ff6f";
 }

 function cases(){

    document.getElementById("long").value = "DEEPCOOL MACUBE 550, White, Full Tower Chassis w/ Tempered Glass Window, 120mm Fan, USB 3.0, ATX/MicroATX/Mini-ITX";
    document.getElementsByClassName("long-count")[0].innerHTML = "Long: " + longCount.value.replace(/ +/g, ' ').length;
    document.getElementsByClassName("long-title")[0].innerHTML = "<Legend style='color:white;'>Long Title</Legend>DEEPCOOL MACUBE 550, White, Full Tower Chassis w/ Tempered Glass Window, 120mm Fan, USB 3.0, ATX/MicroATX/Mini-ITX";
    

    document.getElementById("short").value = "DEEPCOOL MACUBE 550 White Full Tower Tempered Glass PC Gaming Case";
    document.getElementsByClassName("short-title")[0].innerHTML = "<Legend style='color:white;'>Short Title</Legend>DEEPCOOL MACUBE 550 White Full Tower Tempered Glass PC Gaming Case";
    document.getElementsByClassName("short-count")[0].innerHTML = "Short: " + shortCount.value.replace(/ +/g, ' ').length;

    longStatus.innerHTML = "Long Status: <span style='color:#71ff6f;'>Good</span>";
    shortStatus.innerHTML = "Short Status: <span style='color:#71ff6f;'>Good</span>";
    longCount.style.backgroundColor = "rgb(29, 82, 37)";
    longTitle.style.color = "#71ff6f";
    shortCount.style.backgroundColor = "rgb(29, 82, 37)";
    shortTitle.style.color = "#71ff6f";

 }

 function amdGPU(){

    document.getElementById("long").value = "ASUS Radeon RX 5700 XT ROG STRIX OC 8GB GDDR6 PCIe 4.0 Graphics Card, 7nm RDNA, 2560 Streams, 1770MHz GPU, 2035MHz Boost";
    document.getElementsByClassName("long-count")[0].innerHTML = "Long: " + longCount.value.replace(/ +/g, ' ').length;
    document.getElementsByClassName("long-title")[0].innerHTML = "<Legend style='color:white;'>Long Title</Legend>ASUS Radeon RX 5700 XT ROG STRIX OC 8GB GDDR6 PCIe 4.0 Graphics Card, 7nm RDNA, 2560 Streams, 1770MHz GPU, 2035MHz Boost";
    

    document.getElementById("short").value = "ASUS AMD Radeon RX 5700 XT 8GB ROG STRIX OC GAMING Graphics Card";
    document.getElementsByClassName("short-title")[0].innerHTML = "<Legend style='color:white;'>Short Title</Legend>ASUS AMD Radeon RX 5700 XT 8GB ROG STRIX OC GAMING Graphics Card";
    document.getElementsByClassName("short-count")[0].innerHTML = "Short: " + shortCount.value.replace(/ +/g, ' ').length;

    longStatus.innerHTML = "Long Status: <span style='color:#71ff6f;'>Good</span>";
    shortStatus.innerHTML = "Short Status: <span style='color:#71ff6f;'>Good</span>";
    longCount.style.backgroundColor = "rgb(29, 82, 37)";
    longTitle.style.color = "#71ff6f";
    shortCount.style.backgroundColor = "rgb(29, 82, 37)";
    shortTitle.style.color = "#71ff6f";
 }

 function internalHDD(){

    document.getElementById("long").value = "2TB Seagate ST2000DM008 BarraCuda, 3.5\" HDD, SATA III - 6Gb/s, 7200rpm, 256MB Cache, NCQ, OEM";
    document.getElementsByClassName("long-count")[0].innerHTML = "Long: " + longCount.value.replace(/ +/g, ' ').length;
    document.getElementsByClassName("long-title")[0].innerHTML = "<Legend style='color:white;'>Long Title</Legend>2TB Seagate ST2000DM008 BarraCuda, 3.5\" HDD, SATA III - 6Gb/s, 7200rpm, 256MB Cache, NCQ, OEM";
    

    document.getElementById("short").value = "Seagate Barracuda 3.5\" SATA III Desktop HDD/Hard Drive";
    document.getElementsByClassName("short-title")[0].innerHTML = "<Legend style='color:white;'>Short Title</Legend>Seagate Barracuda 3.5\" SATA III Desktop HDD/Hard Drive";
    document.getElementsByClassName("short-count")[0].innerHTML = "Short: " + shortCount.value.replace(/ +/g, ' ').length;

    longStatus.innerHTML = "Long Status: <span style='color:#71ff6f;'>Good</span>";
    shortStatus.innerHTML = "Short Status: <span style='color:#71ff6f;'>Good</span>";
    longCount.style.backgroundColor = "rgb(29, 82, 37)";
    longTitle.style.color = "#71ff6f";
    shortCount.style.backgroundColor = "rgb(29, 82, 37)";
    shortTitle.style.color = "#71ff6f";
 }

 function sataSSD(){

    document.getElementById("long").value = "500GB Seagate BarraCuda, 2.5\" SSD, SATA 3.0 (6Gb/s), TLC 3D NAND, 560MB/s Read, 535MB/s Write, 90k/90k IOPS, Retail";
    document.getElementsByClassName("long-count")[0].innerHTML = "Long: " + longCount.value.replace(/ +/g, ' ').length;
    document.getElementsByClassName("long-title")[0].innerHTML = "<Legend style='color:white;'>Long Title</Legend>500GB Seagate BarraCuda, 2.5\" SSD, SATA 3.0 (6Gb/s), TLC 3D NAND, 560MB/s Read, 535MB/s Write, 90k/90k IOPS, Retail";
    

    document.getElementById("short").value = "Seagate 500GB BarraCuda SSD 2.5\" SATA 3D Solid State Drive";
    document.getElementsByClassName("short-title")[0].innerHTML = "<Legend style='color:white;'>Short Title</Legend>Seagate 500GB BarraCuda SSD 2.5\" SATA 3D Solid State Drive";
    document.getElementsByClassName("short-count")[0].innerHTML = "Short: " + shortCount.value.replace(/ +/g, ' ').length;

    longStatus.innerHTML = "Long Status: <span style='color:#71ff6f;'>Good</span>";
    shortStatus.innerHTML = "Short Status: <span style='color:#71ff6f;'>Good</span>";
    longCount.style.backgroundColor = "rgb(29, 82, 37)";
    longTitle.style.color = "#71ff6f";
    shortCount.style.backgroundColor = "rgb(29, 82, 37)";
    shortTitle.style.color = "#71ff6f";
 }

 function RAM(){

    document.getElementById("long").value = "16GB (2x8GB) Corsair DDR4 Vengeance RGB PRO Black, PC4-28800 (3600), Non-ECC Unbuff, CAS 18-22-22-42, RGB LED, 1.35V";
    document.getElementsByClassName("long-count")[0].innerHTML = "Long: " + longCount.value.replace(/ +/g, ' ').length;
    document.getElementsByClassName("long-title")[0].innerHTML = "<Legend style='color:white;'>Long Title</Legend>16GB (2x8GB) Corsair DDR4 Vengeance RGB PRO Black, PC4-28800 (3600), Non-ECC Unbuff, CAS 18-22-22-42, RGB LED, 1.35V";
    

    document.getElementById("short").value = "Corsair Vengeance RGB PRO Black 16GB 3600 MHz DDR4 Dual Channel Memory Kit";
    document.getElementsByClassName("short-title")[0].innerHTML = "<Legend style='color:white;'>Short Title</Legend>Corsair Vengeance RGB PRO Black 16GB 3600 MHz DDR4 Dual Channel Memory Kit";
    document.getElementsByClassName("short-count")[0].innerHTML = "Short: " + shortCount.value.replace(/ +/g, ' ').length;

    longStatus.innerHTML = "Long Status: <span style='color:#71ff6f;'>Good</span>";
    shortStatus.innerHTML = "Short Status: <span style='color:#71ff6f;'>Good</span>";
    longCount.style.backgroundColor = "rgb(29, 82, 37)";
    longTitle.style.color = "#71ff6f";
    shortCount.style.backgroundColor = "rgb(29, 82, 37)";
    shortTitle.style.color = "#71ff6f";
 }

 function amdMobo(){

    document.getElementById("long").value = "ASUS ROG Crosshair VIII Formula, AMD X570, AM4, DDR4, PCIe 4.0, Dual M.2, 2-Way SLi/3-Way CrossFire, 5G/GbE/WiFi, ATX";
    document.getElementsByClassName("long-count")[0].innerHTML = "Long: " + longCount.value.replace(/ +/g, ' ').length;
    document.getElementsByClassName("long-title")[0].innerHTML = "<Legend style='color:white;'>Long Title</Legend>ASUS ROG Crosshair VIII Formula, AMD X570, AM4, DDR4, PCIe 4.0, Dual M.2, 2-Way SLi/3-Way CrossFire, 5G/GbE/WiFi, ATX";
    

    document.getElementById("short").value = "ASUS AMD Ryzen X570 ROG Crosshair VIII Formula AM4 PCIe 4.0 ATX Motherboard";
    document.getElementsByClassName("short-title")[0].innerHTML = "<Legend style='color:white;'>Short Title</Legend>ASUS AMD Ryzen X570 ROG Crosshair VIII Formula AM4 PCIe 4.0 ATX Motherboard";
    document.getElementsByClassName("short-count")[0].innerHTML = "Short: " + shortCount.value.replace(/ +/g, ' ').length;

    longStatus.innerHTML = "Long Status: <span style='color:#71ff6f;'>Good</span>";
    shortStatus.innerHTML = "Short Status: <span style='color:#71ff6f;'>Good</span>";
    longCount.style.backgroundColor = "rgb(29, 82, 37)";
    longTitle.style.color = "#71ff6f";
    shortCount.style.backgroundColor = "rgb(29, 82, 37)";
    shortTitle.style.color = "#71ff6f";
 }

 function intelMobo(){

    document.getElementById("long").value = "ASUS ROG MAXIMUS XI EXTREME, Intel Z390, S 1151, DDR4, SATA3, 3x M.2, SLi/CrossFire, 5GbE, USB 3.1 A+C, E-ATX";
    document.getElementsByClassName("long-count")[0].innerHTML = "Long: " + longCount.value.replace(/ +/g, ' ').length;
    document.getElementsByClassName("long-title")[0].innerHTML = "<Legend style='color:white;'>Long Title</Legend>ASUS ROG MAXIMUS XI EXTREME, Intel Z390, S 1151, DDR4, SATA3, 3x M.2, SLi/CrossFire, 5GbE, USB 3.1 A+C, E-ATX";
    

    document.getElementById("short").value = "ASUS Intel Z390 ROG MAXIMUS XI EXTREME E-ATX Motherboard";
    document.getElementsByClassName("short-title")[0].innerHTML = "<Legend style='color:white;'>Short Title</Legend>ASUS Intel Z390 ROG MAXIMUS XI EXTREME E-ATX Motherboard";
    document.getElementsByClassName("short-count")[0].innerHTML = "Short: " + shortCount.value.replace(/ +/g, ' ').length;

    longStatus.innerHTML = "Long Status: <span style='color:#71ff6f;'>Good</span>";
    shortStatus.innerHTML = "Short Status: <span style='color:#71ff6f;'>Good</span>";
    longCount.style.backgroundColor = "rgb(29, 82, 37)";
    longTitle.style.color = "#71ff6f";
    shortCount.style.backgroundColor = "rgb(29, 82, 37)";
    shortTitle.style.color = "#71ff6f";
 }

 function PSU(){

    document.getElementById("long").value = "650W be quiet! Straight Power 11, Fully Modular, 80 PLUS Gold, SLI/CrossFire, Quad Rail, 54.1A, 135mm Fan, ATX PSU";
    document.getElementsByClassName("long-count")[0].innerHTML = "Long: " + longCount.value.replace(/ +/g, ' ').length;
    document.getElementsByClassName("long-title")[0].innerHTML = "<Legend style='color:white;'>Long Title</Legend>650W be quiet! Straight Power 11, Fully Modular, 80 PLUS Gold, SLI/CrossFire, Quad Rail, 54.1A, 135mm Fan, ATX PSU";
    

    document.getElementById("short").value = "be quiet Straight Power 11 650 Watt Fully Modular 80+ Gold PSU/Power Supply";
    document.getElementsByClassName("short-title")[0].innerHTML = "<Legend style='color:white;'>Short Title</Legend>be quiet Straight Power 11 650 Watt Fully Modular 80+ Gold PSU/Power Supply";
    document.getElementsByClassName("short-count")[0].innerHTML = "Short: " + shortCount.value.replace(/ +/g, ' ').length;

    longStatus.innerHTML = "Long Status: <span style='color:#71ff6f;'>Good</span>";
    shortStatus.innerHTML = "Short Status: <span style='color:#71ff6f;'>Good</span>";
    longCount.style.backgroundColor = "rgb(29, 82, 37)";
    longTitle.style.color = "#71ff6f";
    shortCount.style.backgroundColor = "rgb(29, 82, 37)";
    shortTitle.style.color = "#71ff6f";
 }

 function nvmeSSD(){

    document.getElementById("long").value = "1TB Samsung 970 EVO, M.2 (2280) PCIe 3.0 (x4) NVMe SSD, Phoenix, MLC V-NAND, 3400MB/s Read, 2500MB/s Write, 500k/450k";
    document.getElementsByClassName("long-count")[0].innerHTML = "Long: " + longCount.value.replace(/ +/g, ' ').length;
    document.getElementsByClassName("long-title")[0].innerHTML = "<Legend style='color:white;'>Long Title</Legend>1TB Samsung 970 EVO, M.2 (2280) PCIe 3.0 (x4) NVMe SSD, Phoenix, MLC V-NAND, 3400MB/s Read, 2500MB/s Write, 500k/450k";
    

    document.getElementById("short").value = "Samsung 970 EVO 1TB M.2 PCIe NVMe SSD/Solid State Drive";
    document.getElementsByClassName("short-title")[0].innerHTML = "<Legend style='color:white;'>Short Title</Legend>Samsung 970 EVO 1TB M.2 PCIe NVMe SSD/Solid State Drive";
    document.getElementsByClassName("short-count")[0].innerHTML = "Short: " + shortCount.value.replace(/ +/g, ' ').length;

    longStatus.innerHTML = "Long Status: <span style='color:#71ff6f;'>Good</span>";
    shortStatus.innerHTML = "Short Status: <span style='color:#71ff6f;'>Good</span>";
    longCount.style.backgroundColor = "rgb(29, 82, 37)";
    longTitle.style.color = "#71ff6f";
    shortCount.style.backgroundColor = "rgb(29, 82, 37)";
    shortTitle.style.color = "#71ff6f";
 }

 function nvidiaGPU(){

    document.getElementById("long").value = "MSI GeForce RTX 2080 Ti GAMING X TRIO 11GB GDDR6 Ray-Tracing Graphics Card, 4352 Core, 1350MHz GPU, 1755MHz Boost";
    document.getElementsByClassName("long-count")[0].innerHTML = "Long: " + longCount.value.replace(/ +/g, ' ').length;
    document.getElementsByClassName("long-title")[0].innerHTML = "<Legend style='color:white;'>Long Title</Legend>MSI GeForce RTX 2080 Ti GAMING X TRIO 11GB GDDR6 Ray-Tracing Graphics Card, 4352 Core, 1350MHz GPU, 1755MHz Boost";
    

    document.getElementById("short").value = "MSI NVIDIA GeForce RTX 2080 Ti 11GB GAMING X TRIO Turing Graphics Card";
    document.getElementsByClassName("short-title")[0].innerHTML = "<Legend style='color:white;'>Short Title</Legend>MSI NVIDIA GeForce RTX 2080 Ti 11GB GAMING X TRIO Turing Graphics Card";
    document.getElementsByClassName("short-count")[0].innerHTML = "Short: " + shortCount.value.replace(/ +/g, ' ').length;

    longStatus.innerHTML = "Long Status: <span style='color:#71ff6f;'>Good</span>";
    shortStatus.innerHTML = "Short Status: <span style='color:#71ff6f;'>Good</span>";
    longCount.style.backgroundColor = "rgb(29, 82, 37)";
    longTitle.style.color = "#71ff6f";
    shortCount.style.backgroundColor = "rgb(29, 82, 37)";
    shortTitle.style.color = "#71ff6f";
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
