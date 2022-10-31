import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import HttpService from "../../services/http.services";
import { Get } from "../../services/api.services";

export const getBlogData = createAsyncThunk("blog/getBlogData", async () => {
  const response = await Get(HttpService.getITBlog);
  return response;
});

const HomeblogSlice = createSlice({
  name: "blog",
  initialState: {
    data: [],
    status: null,
  },

  extraReducers: {
    [getBlogData.pending]: (state) => {
      state.status = "loading";
    },
    [getBlogData.fulfilled]: (state, { payload }) => {
      state.status = "success";
      state.data = payload;
    },
    [getBlogData.rejected]: (state) => {
      state.status = "failed";
    },
  },
});

export default HomeblogSlice.reducer;
