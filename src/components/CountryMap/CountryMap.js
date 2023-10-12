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
          coordinates: [83.25, 23.88333],
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

  var geojson_1 = {
    type: "FeatureCollection",
    features: [
      {
        type: "Feature",
        properties: {
          description: "Station #1",
        },
        geometry: {
          type: "Point",
          coordinates: [74.82, 25.11667],
        },
      },
      {
        type: "Feature",
        properties: {
          description: "Station #2",
        },
        geometry: {
          type: "Point",
          coordinates: [75.73333, 20.6],
        },
      },
      {
        type: "Feature",
        properties: {
          description: "Station #3",
        },
        geometry: {
          type: "Point",
          coordinates: [77.35, 23.27333],
        },
      },
      {
        type: "Feature",
        properties: {
          description: "Station #4",
        },
        geometry: {
          type: "Point",
          coordinates: [77.58333, 12.16667],
        },
      },
      {
        type: "Feature",
        properties: {
          description: "Station #5",
        },
        geometry: {
          type: "Point",
          coordinates: [72.63333, 23.56667],
        },
      },
      {
        type: "Feature",
        properties: {
          description: "Station #6",
        },
        geometry: {
          type: "Point",
          coordinates: [78.25, 23.88333],
        },
      },
      {
        type: "Feature",
        properties: {
          description: "Station #7",
        },
        geometry: {
          type: "Point",
          coordinates: [78.16288, 20.493684],
        },
      },
    ],
  };

  var geojson_2 = {
    type: "FeatureCollection",
    features: [
      {
        type: "Feature",
        properties: {
          description: "Station #1",
        },
        geometry: {
          type: "Point",
          coordinates: [73.85, 19.11667],
        },
      },
      {
        type: "Feature",
        properties: {
          description: "Station #2",
        },
        geometry: {
          type: "Point",
          coordinates: [74.83333, 23.25],
        },
      },
      {
        type: "Feature",
        properties: {
          description: "Station #3",
        },
        geometry: {
          type: "Point",
          coordinates: [76.35, 23.28333],
        },
      },
      {
        type: "Feature",
        properties: {
          description: "Station #4",
        },
        geometry: {
          type: "Point",
          coordinates: [76.58333, 12.96667],
        },
      },
      {
        type: "Feature",
        properties: {
          description: "Station #5",
        },
        geometry: {
          type: "Point",
          coordinates: [79.63333, 23.66667],
        },
      },
      {
        type: "Feature",
        properties: {
          description: "Station #6",
        },
        geometry: {
          type: "Point",
          coordinates: [73.25, 23.88333],
        },
      },
      {
        type: "Feature",
        properties: {
          description: "Station #7",
        },
        geometry: {
          type: "Point",
          coordinates: [80.96288, 50.593684],
        },
      },
    ],
  };

  var geojson_3 = {
    type: "FeatureCollection",
    features: [
      {
        type: "Feature",
        properties: {
          description: "Station #1",
        },
        geometry: {
          type: "Point",
          coordinates: [75.85, 19.11667],
        },
      },
      {
        type: "Feature",
        properties: {
          description: "Station #2",
        },
        geometry: {
          type: "Point",
          coordinates: [74.83333, 20.25],
        },
      },
      {
        type: "Feature",
        properties: {
          description: "Station #3",
        },
        geometry: {
          type: "Point",
          coordinates: [76.35, 23.28333],
        },
      },
      {
        type: "Feature",
        properties: {
          description: "Station #4",
        },
        geometry: {
          type: "Point",
          coordinates: [76.58333, 12.96667],
        },
      },
      {
        type: "Feature",
        properties: {
          description: "Station #5",
        },
        geometry: {
          type: "Point",
          coordinates: [71.63333, 23.06667],
        },
      },
      {
        type: "Feature",
        properties: {
          description: "Station #6",
        },
        geometry: {
          type: "Point",
          coordinates: [87.25, 23.88333],
        },
      },
      {
        type: "Feature",
        properties: {
          description: "Station #7",
        },
        geometry: {
          type: "Point",
          coordinates: [82.96288, 20.593684],
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

    map.on("load", () => {
      // Add a custom vector tileset source. This tileset contains
      // point features representing museums. Each feature contains
      // three properties. For example:
      // {
      //     alt_name: "Museo Arqueologico",
      //     name: "Museo Inka",
      //     tourism: "museum"
      // }
      map.addSource("Upper-Air", {
        type: "vector",
        url: "mapbox://mapbox.2opop9hr",
      });
      map.addLayer({
        id: "Upper-Air",
        type: "circle",
        source: "Upper-Air",
        layout: {
          // Make the layer visible by default.
          visibility: "visible",
        },
        paint: {
          "circle-radius": 8,
          "circle-color": "rgba(55,148,179,1)",
        },
        "source-layer": "Upper-Air",
      });

      // Add the Mapbox Terrain v2 vector tileset. Read more about
      // the structure of data in this tileset in the documentation:
      // https://docs.mapbox.com/vector-tiles/reference/mapbox-terrain-v2/
      map.addSource("surface", {
        type: "vector",
        url: "mapbox://mapbox.mapbox-terrain-v2",
      });
      map.addLayer({
        id: "surface",
        type: "line",
        source: "surface",
        "source-layer": "surface",
        layout: {
          // Make the layer visible by default.
          visibility: "visible",
          "line-join": "round",
          "line-cap": "round",
        },
        paint: {
          "line-color": "#877b59",
          "line-width": 1,
        },
      });
    });

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

    // add markers to map
    geojson_1.features.forEach(function (marker) {
      el = document.createElement("div");
      el.className = "marker_1";
      popup = new mapboxgl.Popup()
        .setLngLat(marker.geometry.coordinates)
        .setText(marker.properties.description);
      new mapboxgl.Marker(el)
        .setLngLat(marker.geometry.coordinates)
        .setPopup(popup)
        .addTo(map);
    });

    // add markers to map
    geojson_2.features.forEach(function (marker) {
      el = document.createElement("div");
      el.className = "marker_2";
      popup = new mapboxgl.Popup()
        .setLngLat(marker.geometry.coordinates)
        .setText(marker.properties.description);
      new mapboxgl.Marker(el)
        .setLngLat(marker.geometry.coordinates)
        .setPopup(popup)
        .addTo(map);
    });

    // add markers to map
    geojson_3.features.forEach(function (marker) {
      el = document.createElement("div");
      el.className = "marker_3";
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
      {/* <FileTypeTabs /> */}
      <nav id="menu_toggle"></nav>
      <div id="map"></div>
      <ObservationsTbl />
    </div>
  );
};

export default CountryMap;
