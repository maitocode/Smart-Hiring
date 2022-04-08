import http from "core/services/httpService";
import React from "react";
import { STATUS } from "core/constants";
export default function useMemberToRadarChart(
  projectId,
  position,
  statusDropdown
) {
  const statusConvert = Object.keys(STATUS).find(
    (key) => STATUS[key] === statusDropdown
  );
  const [members, setMembers] = React.useState([]);

  const getMemberToRadarChart = async () => {
    const res = await http.get(
      `/persona/profiles//get-persona-users-detail?projectId=${projectId}&positionId=${position?.id}&interestingStatus=${statusConvert}`
    );
    setMembers(res.data.member);
  };

  React.useEffect(() => {
    try {
      statusConvert && getMemberToRadarChart();
    } catch (error) {
      console.log(error);
    }
  }, [statusConvert]);
  return [members];
}
