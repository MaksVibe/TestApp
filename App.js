import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./redux/store";
import { NavigationContainer } from "@react-navigation/native";
import { useRoute } from "./router";
import LoadingScreen from "./Screens/LoadingScreen/LoadingScreen";

export default function App() {
  const routing = useRoute(true);
  return (
    <Provider store={store}>
      <PersistGate loading={<LoadingScreen />} persistor={persistor}>
        <NavigationContainer>{routing}</NavigationContainer>
      </PersistGate>
    </Provider>
  );
}
