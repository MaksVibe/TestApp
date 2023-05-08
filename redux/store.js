import AsyncStorage from "@react-native-async-storage/async-storage";
import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { persistStore, persistReducer } from "redux-persist";
import photosReducer from "./photos/photos-slice";

const photosPersistConfig = {
  key: "photos",
  storage: AsyncStorage,
  whitelist: ["photos"],
};

export const store = configureStore({
  reducer: {
    photos: persistReducer(photosPersistConfig, photosReducer),
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

setupListeners(store.dispatch);

export const persistor = persistStore(store);
