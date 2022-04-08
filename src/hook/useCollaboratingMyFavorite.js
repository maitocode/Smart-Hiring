import React from "react";
import http from "core/services/httpService.js";

export default function useCollaboratingMyFavorite(id) {
  const [data, setData] = React.useState([]);
  const getLocation = async () => {
    await http
      .get(`/project/projects/get-collaborate-projects?userId=${id}`)
      .then((response) => {
        setData(response.data);
      });
  };
  React.useEffect(() => {
    getLocation();
  }, []);
  return [data];
}
