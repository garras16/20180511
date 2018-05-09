function initMap() {
    var center = {lat: -4.9516568, lng: 105.1810978};
    var map=new google.maps.Map(document.getElementById('map'),{zoom:9,center:center});    
}
// Initialize Firebase
var config = {
  apiKey: "AIzaSyCFTo2Ptcv4rm4INPcncz-WrtIsezv2mpI",
  authDomain: "cobagis16.firebaseapp.com",
  databaseURL: "https://cobagis16.firebaseio.com",
  projectId: "cobagis16",
  storageBucket: "cobagis16.appspot.com",
  messagingSenderId: "568661144402"
};
  firebase.initializeApp(config);

  var db = firebase.database();
  var ref = db.ref('markers');
  ref.on('value', getData, showError);

  function getData(data){
    var marker = data.val();
    var kunci = Object.keys(data.val());


   //console.log(kunci);

  var content = "";
  for(var i=0; i<kunci.length;i++){
    content +=marker[kunci[i]].coordinate.lat + "<br>" +
    marker[kunci[i]].info + "<br>";
  }
    document.getElementById('info').innerHTML = content;
  }

  function showError(err){
    document.getElementById('info').innerHTML = err;

  }
  document.getElementById('simpan').addEventListener('click', function (event){

    ref.push(
        {
            coordinate: {
                lat: document.getElementById('latitude').value,
                lng: document.getElementById('longitude').value
            },
            info: document.getElementById('informasi').value
        }
    );

  }
);
