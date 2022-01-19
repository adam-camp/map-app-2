      require(["esri/Map", "esri/views/MapView"], (Map, MapView) => {
        const map = new Map({
          basemap: "streets-night-vector"
        });

        const view = new MapView({
          container: "viewDiv",
          map: map,
          zoom: 9,
          center: [-88, 42] // longitude, latitude
        });
      });
