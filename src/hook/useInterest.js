import http from "core/services/httpService";
import { pushToast } from "components/Toast";
import { useState } from "react";

export default function useInterest() {
  const [status, setStatus] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const interest = async (dataInterest, { interest }) => {
    setStatus(false);
    try {
      setIsLoading(true);
      const res = interest
        ? await http.post(`/project/interesting/interest`, dataInterest)
        : await http.post(`/project/interesting/not-interest`, dataInterest);
      pushToast("success", res.message);
      setStatus(true);
      setIsLoading(false);
    } catch (error) {
      pushToast("error", error.message);
      setIsLoading(false);
    }
  };
  return [isLoading, interest, status];
}
