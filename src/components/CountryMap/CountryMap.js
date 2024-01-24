import React from "react";
import { useState, useEffect } from "react";

import "./CountryMap.css";
import ObservationsTbl from "../ObservationsTbl/ObservationsTbl";

import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import countriesCentroids from "./country-centroids.json";
import { apiEndpoint } from "../../Api.js";


function getCountryCenter(iso3) {
  for (let i = 0; i < countriesCentroids.length; i++) {
    if (countriesCentroids[i]["iso3"] == iso3) {
      let lon = countriesCentroids[i]["longitude"];
      let lat = countriesCentroids[i]["latitude"];
      return [lon, lat];
    }
  }
}

const CountryMap = (props) => {
  console.log(props.props);
  const key =
    "pk.eyJ1Ijoia3VydC1oZWN0aWMiLCJhIjoiY2loNGtsNzc0MHpvdHgxbTBxejQzOGVpZiJ9.NiOdnMqDcZKeR6Oxo7tWmw";

  const MAPBOX_BACKGROUND_WDQMS =
    "mapbox://styles/kurt-hectic/cj488lfn91qxh2rrz0nghg0y3";
  const MAPBOX_STREET_BACKGROUND = "mapbox://styles/mapbox/streets-v12";
  mapboxgl.accessToken = key;
  const [stations, setStations] = useState([]);
  useEffect(() => {
    let iso3 = props.props.params.country;
    let quarter = props.props.params.quarter;
    let year = props.props.params.year;
    let baseline = props.props.params.baseline.toLowerCase();

    let url =
      apiEndpoint +
      `/stations_list?iso3=${iso3}&quarter=${quarter}&year=${year}&baseline=${baseline}`;
    (async () => {
      const data = await fetch(url).then((res) => res.json());
      console.log(data);
      setStations(data);
    })();
  }, []);

  let center = getCountryCenter(props.props.params.country);

  useEffect(() => {
    var zoom = 3;
    if (["USA", "CAN", "RUS"].includes(props.props.params.country)) {
      zoom = 1;
    }
    if (["CHN"].includes(props.props.params.country)) {
      zoom = 2;
    }
    if (["QAT", 'CHE', 'FJI', 'CZE'].includes(props.props.params.country)) {
      zoom = 5;
    }
    if (["DEU"].includes(props.props.params.country)) {
      zoom = 4;
    }
    var map = new mapboxgl.Map({
      container: "map",
      style: MAPBOX_BACKGROUND_WDQMS,
      center: center,
      zoom: zoom,
    });
    map.addControl(new mapboxgl.FullscreenControl());
    map.addControl(new mapboxgl.NavigationControl());

    // map.on("load", () => {
    //   map.addSource("Upper-Air", {
    //     type: "vector",
    //     url: "mapbox://mapbox.2opop9hr",
    //   });
    //   map.addLayer({
    //     id: "Upper-Air",
    //     type: "circle",
    //     source: "Upper-Air",
    //     layout: {
    //       // Make the layer visible by default.
    //       visibility: "visible",
    //     },
    //     paint: {
    //       "circle-radius": 8,
    //       "circle-color": "rgba(55,148,179,1)",
    //     },
    //     // "source-layer": "Upper-Air",
    //   });

    //   // Add the Mapbox Terrain v2 vector tileset. Read more about
    //   // the structure of data in this tileset in the documentation:
    //   // https://docs.mapbox.com/vector-tiles/reference/mapbox-terrain-v2/
    //   map.addSource("surface", {
    //     type: "vector",
    //     url: "mapbox://mapbox.mapbox-terrain-v2",
    //   });
    //   map.addLayer({
    //     id: "surface",
    //     type: "line",
    //     source: "surface",
    //     // "source-layer": "surface",
    //     layout: {
    //       // Make the layer visible by default.
    //       visibility: "visible",
    //       "line-join": "round",
    //       "line-cap": "round",
    //     },
    //     paint: {
    //       "line-color": "#877b59",
    //       "line-width": 1,
    //     },
    //   });
    // });

    map.on("idle", () => {
      // If these two layers were not added to the map, abort

      // Enumerate ids of the layers.
      const toggleableLayerIds = ["Upper-Air", "surface"];

      // Set up the corresponding toggle button for each layer.
      for (const id of toggleableLayerIds) {
        // Skip layers that already have a button set up.
        if (document.getElementById(id)) {
          continue;
        }

        // Create a link.
        const link = document.createElement("a");
        link.id = id;
        link.href = "#";
        link.textContent = id;
        link.className = "active";

        // Show or hide layer when the toggle is clicked.
        link.onclick = function (e) {
          const clickedLayer = this.textContent;
          e.preventDefault();
          e.stopPropagation();

          const visibility = map.getLayoutProperty(clickedLayer, "visibility");

          // Toggle layer visibility by changing the layout object's visibility property.
          if (visibility === "visible") {
            map.setLayoutProperty(clickedLayer, "visibility", "none");
            this.className = "";
          } else {
            this.className = "active";
            map.setLayoutProperty(clickedLayer, "visibility", "visible");
          }
        };

        const layers = document.getElementById("menu_toggle");
        layers.appendChild(link);
      }
    });
    if (stations.features) {
      // add markers to map
      stations.features.forEach(function (marker) {
        let el = document.createElement("div");

        if (marker.properties.received / marker.properties.target > 0.8) {
          el.className = "green_marker";
        } else if (
          marker.properties.received / marker.properties.target > 0.3 &&
          marker.properties.received / marker.properties.target < 0.8
        ) {
          el.className = "orange_marker";
        } else if (
          marker.properties.received / marker.properties.target <
          0.3
        ) {
          el.className = "red_marker";
        }
        if (marker.properties.received == 0) {
          el.className = "black_marker";
        }
        let popup = new mapboxgl.Popup({ offset: 25 }) // add popups
          .setLngLat(marker.geometry.coordinates)
          .setHTML(
            `Wigos-Id: <strong>${marker.properties.wigosid}</strong><p>
            Station Name: <strong>${marker.properties.name}</strong><p>
            Received: <strong>${marker.properties.received}</strong><p>
            Target: <strong>${marker.properties.target}</strong><p>
            Type: <strong>${marker.properties.type}</strong><p>

            <a class="link-oscar" target="_blank" rel="noopener noreferrer" href="https://oscar.wmo.int/surface/index.html#/search/station/stationReportDetails/${marker.properties.wigosid}">Open in OSCAR</a>
            </p>`
          );
        new mapboxgl.Marker(el)
          .setLngLat(marker.geometry.coordinates)
          .setPopup(popup)
          .addTo(map);
      });
    }

  }, [stations]);

  return (
    <div id="map-container">
      {/* <FileTypeTabs /> */}
      <nav id="menu_toggle"></nav>
      <div id="map"></div>
      <ObservationsTbl props={props.props} />
    </div>
  );
};

export default CountryMap;
