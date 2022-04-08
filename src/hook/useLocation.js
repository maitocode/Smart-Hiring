import http from "core/services/httpService";
import React from "react";

export default function useLocation() {
  const [location, setLocation] = React.useState([]);
  const getLocation = async () => {
    await http.get("/persona/location").then((response) => {
      setLocation(
        response.data.map((location) => ({
          id: location.id,
          value: location.city,
          label: location.city,
          timeZone: location.timeZone
        }))
      );
    });
  };

  React.useEffect(() => {
    getLocation();

    return () => {
      setLocation([]);
    };
  }, []);
  return [location];
}
