import { createSlice } from "@reduxjs/toolkit";
import { pushToast } from "components/Toast";
import http from "core/services/httpService";

const slice = createSlice({
  name: "project",
  initialState: {
    loading: false
  },
  reducers: {
    setLoading: (state, action) => {
      const { payload } = action;
      state.loading = payload.loading;
    }
  }
});

export default slice.reducer;
const { setLoading } = slice.actions;

export const getProject = () => async (dispatch) => {
  try {
    dispatch(setLoading({ loading: true }));
    const res = await http.get("/project/projects", {});
    const { data } = res;
    const { message } = res;
    if (data?.projects) {
      const payload = {
        ...data
      };
      dispatch(setLoading({ loading: false }));
      return payload;
    }
    pushToast("error", message);
    return { projects: null };
  } catch (error) {
    dispatch(setLoading({ loading: false }));
    pushToast("error", error.message);
    return { projects: null };
  }
};
