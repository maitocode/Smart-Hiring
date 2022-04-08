import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { pushToast } from "components/Toast";
import http from "core/services/httpService";
import STATUS from "./constants";

export const fetchProjects = createAsyncThunk(
  "projects/fetchProjects",
  async () => {
    const res = await http.get("/project/projects");
    return res.data;
  }
);

export const fetchAllProjectsRecommend = createAsyncThunk(
  "projects/fetchAllProjectsRecommend",
  async ({ userId, page, size, filterValue }) => {
    try {
      const res = await http.get(
        `persona/recommendation/explore-project?userId=${userId}&page=${page}&size=${size}&filterValue=${filterValue}`
      );
      return res.data;
    } catch (err) {
      pushToast("error", err.message);
      console.log(err);
    }
  }
);

export const fetchAllProjectsByPoId = createAsyncThunk(
  "projects/fetchAllProjectsByPoId",
  async ({ poId, searchTitle }) => {
    try {
      const res = await http.get(
        `/project/projects/get-all?poId=${poId}&projectTitle=${
          searchTitle || ""
        }`
      );
      return res.data;
    } catch (err) {
      pushToast("error", err.message);
      console.log(err);
    }
  }
);

export const projectsSlice = createSlice({
  name: "projects",
  initialState: {
    data: null,
    status: STATUS.IDLE,
    error: null
  },
  reducers: {
    doSomething: (state, actions) => {
      console.log(actions.payload);
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchProjects.pending, (state) => {
        state.status = STATUS.LOADING;
      })
      .addCase(fetchProjects.fulfilled, (state, action) => {
        state.status = STATUS.SUCCEEDED;
        state.data = action.payload;
      })
      .addCase(fetchProjects.rejected, (state, action) => {
        state.status = STATUS.FAILED;
        state.error = action.error.message;
      })
      .addCase(fetchAllProjectsRecommend.pending, (state) => {
        state.status = STATUS.LOADING;
      })
      .addCase(fetchAllProjectsRecommend.fulfilled, (state, action) => {
        state.status = STATUS.SUCCEEDED;
        state.data = action.payload;
      })
      .addCase(fetchAllProjectsRecommend.rejected, (state, action) => {
        state.status = STATUS.FAILED;
        state.error = action.error.message;
      })
      .addCase(fetchAllProjectsByPoId.pending, (state) => {
        state.status = STATUS.LOADING;
      })
      .addCase(fetchAllProjectsByPoId.fulfilled, (state, action) => {
        state.status = STATUS.SUCCEEDED;
        state.data = action.payload;
      })
      .addCase(fetchAllProjectsByPoId.rejected, (state, action) => {
        state.status = STATUS.FAILED;
        state.error = action.error.message;
      });
  }
});
export const { doSomething } = projectsSlice.actions;

export default projectsSlice.reducer;

export const selectProjects = (state) => state.projects.data;

export const selectProjectsStatus = (state) => state.projects.status;

export const selectProjectsError = (state) => state.projects.error;
