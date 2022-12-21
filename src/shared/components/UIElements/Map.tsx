import React, { useRef, useEffect } from 'react';
import { TMap } from 'shared/types/UI';

import './Map.css';

function Map(props: TMap) {
  const mapRef = useRef<HTMLDivElement>(null);

  const { center, zoom } = props;

  useEffect(() => {
    const map = new window.google.maps.Map(mapRef.current!, {
      center,
      zoom,
    });

    (() => {
      return new window.google.maps.Marker({
        position: center,
        map,
      });
    })();
  }, [center, zoom]);

  return <div ref={mapRef} className="map" />;
}

export default Map;
