"use client";

import { useRef, useEffect } from "react";
import "@tomtom-international/web-sdk-maps/dist/maps.css";
import { Card, CardContent } from "@/shared/ui/card";
import { useTheme } from "next-themes";

const Map = ({ lat, lon }: { lat: number; lon: number }) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstance = useRef<tt.Map | null>(null);
  const { resolvedTheme } = useTheme();

  const initMap = async () => {
    const tt = await import("@tomtom-international/web-sdk-maps");

    const map = tt.map({
      key: process.env.NEXT_PUBLIC_MAP_KEY as string,
      container: mapRef.current!,
      center: [lon, lat],
      zoom: 10,
      style: getMapStyle(resolvedTheme) as tt.MapStyleConfig,
    });

    map.addControl(new tt.NavigationControl());
    mapInstance.current = map; 
  };

  const getMapStyle = (theme?: string): tt.MapStyleConfig => {
    return {
      map: theme === "dark" ? "basic_night" : "basic_main",
      trafficIncidents: "incidents_day",
      trafficFlow: "flow_absolute",
      poi: "poi_main",
    };
  };

  useEffect(() => {
    if (mapInstance.current) {
      mapInstance.current.setStyle(getMapStyle(resolvedTheme));
    }
  }, [resolvedTheme]);

  useEffect(() => {
    initMap();

    return () => {
      if (mapInstance.current) {
        mapInstance.current.remove();
        mapInstance.current = null;
      }
    };
  }, [lat, lon, resolvedTheme]);

  return (
    <Card className="mt-4 p-0 w-full">
      <CardContent className="p-0 w-full">
        <div className="w-full h-90 rounded-xl" ref={mapRef}></div>
      </CardContent>
    </Card>
  );
};

export default Map;
