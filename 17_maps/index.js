let map, markers;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: {
      lat: -76.270652,
      lng: 22.334220,
    },
  });

  window.initMap = initMap;

  markers.push(
    new google.maps.Marker({
      position: {
        lat: 28.4540429,
        lng: -16.2542178,
      },
      map,
      title: "Parque Marítimo César Manrique",
    })
  );
  markers.push(
    new google.maps.Marker({
      position: {
        lat: 37.5287437,
        lng: 126.9266467,
      },
      map,
      title: "여의도공원 한국전통의숲",
    })
  );
  markers.push(
    new google.maps.Marker({
      position: {
        lat: -4.0969496,
        lng: -81.0503506,
      },
      map,
      title: "Máncora",
    })
  );
}