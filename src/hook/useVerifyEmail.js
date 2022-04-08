import http from "core/services/httpService";
import { pushToast } from "components/Toast";
import { useHistory } from "react-router";

export default function useVerifyEmail() {
  const history = useHistory();
  const verifyEmail = async (digitCode) => {
    try {
      await http
        .get(`auth/sign-up/confirm?token=${digitCode}`)
        .then((response) => {
          if (response?.message === "Confirmed") {
            localStorage.removeItem("email");
            history.push("/login", {
              successful: "Your code is correct. Please log in."
            });
          } else {
            pushToast("error", response?.data?.message);
          }
        });
    } catch (error) {
      pushToast("error", error.message);
    }
  };
  return [verifyEmail];
}
