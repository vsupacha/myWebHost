var btnCount = 0;
var countText;
var latlng;

function buttonClick() {
    //alert("Button is clicked");
    getLocation();
    btnCount = btnCount + 1;
    countText = document.getElementById("count");
    countText.innerHTML = "Count: " + btnCount;
    console.log("button is clicked");
}

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else { 
        console.log("Geolocation is not supported by this browser.");
    }
}

function showPosition(position) {
    latlng = document.getElementById("latlng");  
    latlng.innerHTML = "Current position: " + position.coords.latitude + "," + position.coords.longitude;
}