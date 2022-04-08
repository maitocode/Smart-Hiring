import { useEffect, useState } from "react";
import http from "core/services/httpService";
import { pushToast } from "components/Toast";

const useDivision = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchApi = async () => {
    const res = await http.get(`/persona/division`);
    const converted = res?.data?.map(({ id, name }) => ({
      id,
      value: name,
      label: name
    }));
    setData(converted);
  };

  useEffect(() => {
    try {
      setIsLoading(true);
      fetchApi();
      setIsLoading(false);
    } catch (error) {
      setError(error);
      pushToast("error", error);
    }

    return () => {
      setData([]);
    };
  }, []);

  return [data, isLoading, error];
};

export default useDivision;
