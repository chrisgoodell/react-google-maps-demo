import React from 'react';
import {
  compose,
  withProps,
  withState,
} from 'recompose';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
} from 'react-google-maps';

import POI from './POI';

const GOOGLE_MAPS_API_KEY = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
const GOOGLE_MAPS_URL = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_API_KEY}&v=3.exp&libraries=geometry,drawing,places`

let enhance = compose(
  withProps({
    googleMapURL: GOOGLE_MAPS_URL,
    loadingElement: <div style={{ width: `100%`, height: `100%` }} />,
    containerElement: <div style={{ width: `100%`, height: `100%` }} />,
    mapElement: <div style={{ width: `100%`, height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap,
  withState('currentMarker', 'setCurrentMarker'),
);

let Map = ({ markers, currentMarker, setCurrentMarker }) =>
  <GoogleMap
    defaultZoom={5}
    defaultCenter={new window.google.maps.LatLng(41.8507300, -87.6512600)}
  >
    { markers.map(marker =>
      <POI
        key={marker.id}
        marker={marker}
        showOverlay={currentMarker === marker}
        setCurrentMarker={setCurrentMarker}
      />
    )}
  </GoogleMap>

export default enhance(Map);
