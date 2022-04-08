/*eslint-disable*/
import http from "core/services/httpService";
import React from "react";

export default function useLocation(id) {
  const [data, setData] = React.useState([]);
  const getLocation = async () => {
    await http
      .get(`/project/projects/get-interested-projects?userId=${id}`)
      .then((response) => {
        setData(response.data);
      });
  };
  React.useEffect(() => {
    getLocation();
  }, []);
  return [data];
}
