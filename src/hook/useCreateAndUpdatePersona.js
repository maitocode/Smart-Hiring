import http from "core/services/httpService";
import { useHistory } from "react-router";
import { pushToast } from "components/Toast";
import { useDispatch, useSelector } from "react-redux";
import { USER_ROLE } from "core/constants";
import { setHasProfile } from "store/user";

export default function useCreateAndUpdatePersona() {
  const history = useHistory();
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const userGetLocalStorage = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : null;

  const submit = async (value) => {
    try {
      const res = await http.post(`persona/profiles/create-and-update`, value);
      pushToast("success", "Create profile success");
      dispatch(setHasProfile(true));
      localStorage.setItem(
        "user",
        JSON.stringify({ ...user, isProfileCreated: true })
      );
      if (user.roles[0] === USER_ROLE.DEVELOP) {
        history.push(`/my-profile/${userGetLocalStorage?.id}`);
      } else {
        history.push("/manage-projects");
      }
      return res;
    } catch (error) {
      console.log(error);
      pushToast("error", error?.message);
    }
  };

  return [submit];
}
