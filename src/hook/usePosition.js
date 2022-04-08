import http from "core/services/httpService";
import React from "react";
import { useSelector } from "react-redux";
import { USER_ROLE } from "core/constants";

export default function usePosition() {
  const [position, setPosition] = React.useState([]);
  const { user } = useSelector((state) => state.user);
  const getPosition = async () => {
    var role;
    if (user.roles[0] === USER_ROLE.PROJECT_OWNER) {
      role = "PO";
    } else {
      role = "DEV";
    }
    await http.get(`/persona/position/role/${role}`).then((response) => {
      setPosition(
        response.data.map((position) => ({
          id: position.id,
          value: position.name,
          label: position.name,
          icon: position.icon
        }))
      );
    });
  };

  React.useEffect(() => {
    getPosition();

    return () => {
      setPosition([]);
    };
  }, []);
  return [position];
}
