import { createSlice } from "@reduxjs/toolkit";
import { fetchPhotos } from "./photos-operations";

const initialState = {
  photos: [],
  loading: false,
  error: null,
};

const photosSlice = createSlice({
  name: "photos",
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchPhotos.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPhotos.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.items = payload;
      })
      .addCase(fetchPhotos.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      });
  },
});

export default photosSlice.reducer;
