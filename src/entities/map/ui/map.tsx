"use client";

import { useRef, useEffect } from "react";
import "@tomtom-international/web-sdk-maps/dist/maps.css";
import { Card, CardContent } from "@/shared/ui/card";

const Map = ({ lat, lon }: { lat: number; lon: number }) => {
  const mapRef = useRef<HTMLDivElement>(null);

  const initMap = async () => {
    const tt = await import("@tomtom-international/web-sdk-maps");

    const map = tt.map({
      key: process.env.NEXT_PUBLIC_MAP_KEY as string,
      container: mapRef.current!,
      center: [lon, lat],
      zoom: 10,
    });
  };

  useEffect(() => {
    initMap();
  }, [lat, lon]);

  return (
    <Card className="mt-4 p-0 w-full">
      <CardContent className="p-0 w-full">
        <div className="w-full h-90 rounded-xl" ref={mapRef}></div>
      </CardContent>
    </Card>
  );
};

export default Map;
