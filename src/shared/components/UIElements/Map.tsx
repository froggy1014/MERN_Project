import { useRef, useEffect } from 'react';
import { TMap } from 'shared/types/UI';

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

  return <div ref={mapRef} className="w-full h-64" />;
}

export default Map;
