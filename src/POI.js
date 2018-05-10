import React, { Fragment } from 'react';
import {
  Marker,
  OverlayView,
} from 'react-google-maps';

const getPixelPositionOffset = (width, height) => ({
  x: 16,
  y: -(height / 2),
});

let POI = ({ marker, showOverlay, setCurrentMarker }) =>
  <Fragment>
    <Marker
      position={marker.position}
      onClick={() => setCurrentMarker(marker)}
    >
    </Marker>
    { showOverlay &&
      <OverlayView
        position={marker.position}
        mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
        getPixelPositionOffset={getPixelPositionOffset}
      >
        <div className="poi">
          <p>{marker.name}</p>
        </div>
      </OverlayView>
    }
  </Fragment>

export default POI;
