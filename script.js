let date = document.getElementById("localTime");
var image = document.getElementById("image");

function refreshTime(){
    var d = new Date();
    date.innerHTML = d.toLocaleTimeString();
    
    var heure = d.getHours();
    console.log(heure);
    if (11 < heure && heure <= 18){
        image.src = "afternoon.jpg";
        image.style.transition = "0.5 ease-in-out";
    }
    else if (18 < heure && heure <= 21){
        image.src = "evening.jpg";
    }
    else if (21 < heure && heure <= 24 || 0 <= heure && heure < 5){
        image.src = "night.jpg";
    }
    else {
        image.src = "morning.jpg";
    }
};

refreshTime();
setInterval(refreshTime,1000);



