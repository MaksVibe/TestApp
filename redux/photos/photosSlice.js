import { createSlice } from "@reduxjs/toolkit";
import { fetchPhotos } from "./photosOperations";

const photosSlice = createSlice({
  name: "photos",
  initialState: {
    photos: [],
  },
  extraReducers: builder => {
    builder.addCase(fetchPhotos.fulfilled, (state, { payload }) => {
      state.photos = [...payload];
    });
  },
});

export const photosReducer = photosSlice.reducer;
