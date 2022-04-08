import http from "core/services/httpService";
import React, { useState } from "react";

export default function usePOInfo() {
  const [poInfo, setPoInfo] = useState([]);
  const getLocation = async () => {
    await http
      .get(
        `/persona/profiles/ProductOwner/${
          JSON.parse(localStorage.getItem("user"))?.id
        }`
      )
      .then((response) => {
        setPoInfo(response.data);
      });
  };
  React.useEffect(() => {
    getLocation();
  }, []);
  return [poInfo];
}
