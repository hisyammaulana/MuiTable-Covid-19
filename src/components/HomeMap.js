import React, { useState, useEffect } from "react";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import { Icon } from "leaflet";

const skater = new Icon({
  iconUrl: "/virus.svg",
  iconSize: [25, 25]
});

function HomeMap() {
  const [activePark, setActivePark] = useState(null);
  const [covids, setCovids] = useState([]);

  useEffect(() => {
    fetch("https://covid19.mathdro.id/api/confirmed")
      .then(response => response.json())
      .then(data => {
        setCovids(data);
      });
  }, []);

  return (
    <div>
      <Map center={[35.861660, 104.195396]} zoom={5}>
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
        />
        {covids.map(item => (
          <Marker
            key={item.id}
            position={[item.lat, item.long]}
            onClick={() => {
              setActivePark(item);
            }}
            icon={skater}
          />
        ))}

        {activePark && (
          <Popup
            position={[activePark.lat, activePark.long]}
            onClose={() => {
              setActivePark(null);
            }}
          >
            <div>
              <h2>{activePark.countryRegion}</h2>
              <p>{activePark.provinceState}</p> 
              <p>Case : { activePark.confirmed }, Deaths : { activePark.deaths }, Recovered : { activePark.recovered } </p>
            </div>
          </Popup>
        )}
      </Map>
    </div>
  );
}

export default HomeMap;
