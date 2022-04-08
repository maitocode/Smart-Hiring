import { pushToast } from "components/Toast";
import http from "core/services/httpService";
import { useEffect, useState } from "react";

const useCapability = (persona, forEditCapabilities) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchApi = async () => {
    let res;
    if (persona) {
      res = await http.get(
        "/persona/capability/position?positionId=" + persona?.id
      );
    } else {
      res = await http.get("/persona/capability");
    }
    const converted = res.data.map(({ id, name }) => ({
      id,
      value: name,
      label: name
    }));
    setData(converted);
  };

  useEffect(() => {
    try {
      if (persona && !isLoading) {
        setIsLoading(true);
        fetchApi();
        setIsLoading(false);
      }
      if (!persona && !isLoading && forEditCapabilities) {
        setIsLoading(true);
        fetchApi();
        setIsLoading(false);
      }
    } catch (error) {
      setError(error);
      pushToast("error", error);
    }
    return () => {
      setData([]);
    };
  }, [persona]);

  return [data, isLoading, error];
};

export default useCapability;
