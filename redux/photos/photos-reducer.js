import { createReducer } from "@reduxjs/toolkit";
import { fetchPhotos } from "./photos-operations";

const photosReducer = createReducer([], builder => {
  builder.addCase(fetchPhotos.fulfilled, (_, action) => action.payload);
});

export default photosReducer;
