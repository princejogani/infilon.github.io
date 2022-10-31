import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import HttpService from "../../services/http.services";
import { Get } from "../../services/api.services";

export const getTestmonialData = createAsyncThunk(
  "testimonial/getTestmonialData",
  async () => {
    const response = await Get(HttpService.getCarousel);
    return response;
  }
);

const HometestimonialsSlice = createSlice({
  name: "testimonial",
  initialState: {
    data: [],
    status: null,
  },

  extraReducers: {
    [getTestmonialData.pending]: (state) => {
      state.status = "loading";
    },
    [getTestmonialData.fulfilled]: (state, { payload }) => {
      state.status = "success";
      state.data = payload;
    },
    [getTestmonialData.rejected]: (state) => {
      state.status = "failed";
    },
  },
});

export default HometestimonialsSlice.reducer;





