$(document).ready(function(){

var displayLocation = document.getElementById("coordinate");


setInterval(
  function() {
    navigator.geolocation.getCurrentPosition(GetLocation);
  }
  , 5000)



var GetLocation = function(location) {
  displayLocation.innerHTML += ("<p>"+location.coords.latitude + " " + location.coords.longitude+"</p>");
  locationObject.latitude = location.coords.latitude;
  locationObject.longitude = location.coords.longitude;
}

var locationObject = {
  latitude: 0,
  longitude: 0
}


});