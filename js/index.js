let map = L.map('map');
function getInfo(ipAddress) {
  let ip = ipAddress;
let api_key = "at_JrppE786aSJytdThO90uVAzZRdxAN";
$(function () {
  $.ajax({
      url: "https://cors-anywhere.herokuapp.com/https://geo.ipify.org/api/v1",
      data: {apiKey: api_key, ipAddress: ip},
      success: function(data) {
          console.log(data);
          makeMap(data.location.lat, data.location.lng);
          let ipElement = document.getElementById('ip');
          let locationElement = document.getElementById('location');
          let timezoneElement = document.getElementById('timezone');
          let ispElement = document.getElementById('isp');
          ipElement.innerHTML = `${data.ip}`;
          locationElement.innerHTML = `${data.location.country} - ${data.location.city}`;
          timezoneElement.innerHTML = `UTC ${data.location.timezone}`;
          ispElement.innerHTML = `${data.isp}`;
      }
  });
});
}

function makeMap(lat, lng) {
  let mapboxTiles = L.tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
        attribution: '<a href="http://www.mapbox.com/about/maps/" target="_blank">Terms &amp; Feedback</a>'
    });
    map.addLayer(mapboxTiles).setView([lat, lng], 13);
  let marker = L.marker([lat, lng]).addTo(map);
}


window.onload = async () => {
  getInfo('41.34.44.67');
}

function submitIP(e) {
  e.preventDefault();
  console.log(e);
  let ip = document.getElementById('input-IP').value;
  getInfo(ip);
}