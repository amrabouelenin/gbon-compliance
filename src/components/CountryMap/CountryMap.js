import React from "react";
import { useEffect } from "react";

import "./CountryMap.css";
import FileTypeTabs from "../FileTypeTabs/FileTypeTabs";
import ObservationsTbl from "../ObservationsTbl/ObservationsTbl";

import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

const CountryMap = (props) => {
  const key =
    "pk.eyJ1Ijoia3VydC1oZWN0aWMiLCJhIjoiY2loNGtsNzc0MHpvdHgxbTBxejQzOGVpZiJ9.NiOdnMqDcZKeR6Oxo7tWmw";

  const MAPBOX_BACKGROUND_WDQMS =
    "mapbox://styles/kurt-hectic/cj488lfn91qxh2rrz0nghg0y3";
  const MAPBOX_STREET_BACKGROUND = "mapbox://styles/mapbox/streets-v12";
  mapboxgl.accessToken = key;

  var geojson = {
    type: "FeatureCollection",
    features: [
      {
        type: "Feature",
        properties: {
          description: "Station #1",
        },
        geometry: {
          type: "Point",
          coordinates: [72.85, 19.11667],
        },
      },
      {
        type: "Feature",
        properties: {
          description: "Station #2",
        },
        geometry: {
          type: "Point",
          coordinates: [85.83333, 20.25],
        },
      },
      {
        type: "Feature",
        properties: {
          description: "Station #3",
        },
        geometry: {
          type: "Point",
          coordinates: [77.35, 23.28333],
        },
      },
      {
        type: "Feature",
        properties: {
          description: "Station #4",
        },
        geometry: {
          type: "Point",
          coordinates: [77.58333, 12.96667],
        },
      },
      {
        type: "Feature",
        properties: {
          description: "Station #5",
        },
        geometry: {
          type: "Point",
          coordinates: [72.63333, 23.06667],
        },
      },
      {
        type: "Feature",
        properties: {
          description: "Station #6",
        },
        geometry: {
          type: "Point",
          coordinates: [91.25, 23.88333],
        },
      },
      {
        type: "Feature",
        properties: {
          description: "Station #7",
        },
        geometry: {
          type: "Point",
          coordinates: [78.96288, 20.593684],
        },
      },
    ],
  };
  useEffect(() => {
    var map = new mapboxgl.Map({
      container: "map",
      style: MAPBOX_BACKGROUND_WDQMS,
      center: [78.96288, 20.593684],
      zoom: 3,
    });
    map.addControl(new mapboxgl.FullscreenControl());
    map.addControl(new mapboxgl.NavigationControl());

    map.on("load", function () {
      map.addLayer(
        {
          id: "country-boundaries",
          source: {
            type: "vector",
            url: "mapbox://mapbox.country-boundaries-v1",
          },
          "source-layer": "country_boundaries",
          type: "fill",
          paint: {
            "fill-color": "#d2361e",
            "fill-opacity": 0.1,
          },
        },
        "country-label-sm"
      );
      map.setFilter("country-boundaries", ["in", "iso_3166_1_alpha_3", "IND"]);
    });

    let popup = new mapboxgl.Popup();
    // create a HTML element for each feature
    var el = document.createElement("div");
    el.className = "marker";

    // add markers to map
    geojson.features.forEach(function (marker) {
      el = document.createElement("div");
      el.className = "marker";
      popup = new mapboxgl.Popup()
        .setLngLat(marker.geometry.coordinates)
        .setText(marker.properties.description);
      new mapboxgl.Marker(el)
        .setLngLat(marker.geometry.coordinates)
        .setPopup(popup)
        .addTo(map);
    });
  });

  return (
    <div id="map-container">
      <FileTypeTabs />
      <div id="map"></div>
      <ObservationsTbl />
    </div>
  );
};

export default CountryMap;
