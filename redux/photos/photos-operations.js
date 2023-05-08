import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { createApi } from "unsplash-js";

const API_URL = "https://api.unsplash.com";
const API_ENDPOINT = "/photos";
const API_KEY = "lIV1JLaKmf86_37iwuxWGhxvMdREGsZrjnCOJwotpQE";
const api = createApi({
  accessKey: API_KEY,
});

export const fetchPhotos = api.search
  .getPhotos({ query: "cat", orientation: "landscape" })
  .then(result => {
    console.log(result);
    return result;
  })
  .catch(() => {
    thunkAPI.rejectWithValue("Something wrong :(");
  });
