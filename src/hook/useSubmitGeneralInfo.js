import { pushToast } from "components/Toast";
import http from "core/services/httpService";
import { useHistory } from "react-router-dom";

export default function useSubmitGeneralInfo() {
  const history = useHistory();
  const submit = async (value, type) => {
    try {
      await http
        .post(`persona/profiles/ProductOwner`, value)
        .then((response) => {
          if (type == "view-profile") {
            pushToast("success", "Update profile success");
            history.push("/view-profile");
          } else {
            history.push("/project-first-creation");
          }
          return response;
        });
    } catch (error) {
      pushToast("error", error?.message);
    }
  };
  return [submit, status];
}
