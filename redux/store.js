import { configureStore } from "@reduxjs/toolkit";
import HomeblogSlice from "./slices/HomeblogSlice";
import HometestimonialsSlice from "./slices/HometestimonialsSlice";

export const store = configureStore({
  reducer: {
    Homeblog: HomeblogSlice,
    Hometestimonial: HometestimonialsSlice,
  },
});
