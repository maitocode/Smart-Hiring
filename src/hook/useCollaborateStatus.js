import http from "core/services/httpService";
import { useState, useCallback } from "react";

export const getCollaborateStatus = async (options) => {
  const { projectId, userId } = options;
  if (!projectId || !userId) return;

  const response = await http.get(
    `project/collaborator/get-collaborate-status?projectId=${projectId}&userId=${userId}`
  );
  return response.data;
};

export const useCollaborateStatus = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const execute = async (options = {}) => {
    try {
      setIsLoading(true);
      const response = await getCollaborateStatus(options);
      setData(response);
      setIsLoading(false);
      return response;
    } catch (e) {
      setError(e);
      setIsLoading(false);
      throw e;
    }
  };
  return {
    isLoading,
    error,
    data,
    execute: useCallback(execute, []) // to avoid infinite calls when inside a `useEffect`
  };
};

export const requestCollaborateByUser = async (body) => {
  const { projectId, userId } = body;

  const response = await http.post(`project/collaborator/user-collaborate`, {
    projectId,
    userId
  });
  return response.data;
};

export const requestCollaborateByPO = async (body) => {
  const { projectId, userId, positionId } = body;

  const response = await http.post(`project/collaborator/po-collaborate`, {
    projectId,
    userId,
    positionId: positionId || null
  });
  return response.data;
};

export const acceptCollaborateByUser = async (body) => {
  const { projectId, userId } = body;
  const response = await http.post(
    `project/collaborator/user-accept-collaborate`,
    {
      projectId,
      userId
    }
  );
  return response.data;
};

export const acceptCollaborateByPO = async (body) => {
  const { projectId, userId, positionId } = body;

  const response = await http.post(
    `project/collaborator/po-accept-collaborate`,
    {
      projectId,
      userId,
      positionId: positionId || null
    }
  );
  return response.data;
};

export const rejectCollaborateByUser = async (body) => {
  const { projectId, userId } = body;

  const response = await http.post(
    `project/collaborator/user-reject-collaborate`,
    {
      projectId,
      userId
    }
  );
  return response.data;
};

export const rejectCollaborateByPO = async (body) => {
  const { projectId, userId } = body;
  const response = await http.post(
    `project/collaborator/po-reject-collaborate`,
    {
      projectId,
      userId
    }
  );
  return response.data;
};
