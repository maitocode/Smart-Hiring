import http from "core/services/httpService";
import { pushToast } from "components/Toast";

const useResend = () => {
  const resendToken = async (email) => {
    try {
      await http
        .get(`auth/sign-up/resend-token?email=${email}`)
        .then((response) => {
          pushToast("success", response.message);
        });
    } catch (error) {
      pushToast("error", error.message);
    }
  };
  return [resendToken];
};

export default useResend;
