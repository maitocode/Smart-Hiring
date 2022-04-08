import { pushToast } from "components/Toast";
import http from "core/services/httpService";
import React from "react";

export default function useUid() {
  const [isLoading, setIsLoading] = React.useState(false);
  const [data, setData] = React.useState(null);
  const getUid = async (id) => {
    try {
      setIsLoading(true);
      await http.get(`/auth/get-uid/${id}`).then((response) => {
        pushToast("success", response.message);
        setData(response.data);
        setIsLoading(false);
      });
    } catch (error) {
      pushToast("error", error.message);
      setIsLoading(false);
    }
  };
  return [isLoading, getUid, data];
}
