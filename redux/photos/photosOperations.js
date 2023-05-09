import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

let url = "https://api.unsplash.com";
const key = "?client_id=lIV1JLaKmf86_37iwuxWGhxvMdREGsZrjnCOJwotpQE";
axios.defaults.baseURL = url;

export const fetchPhotos = createAsyncThunk("photos", async (_, thunkAPI) => {
  try {
    const response = await axios.get(`/photos${key}`);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
