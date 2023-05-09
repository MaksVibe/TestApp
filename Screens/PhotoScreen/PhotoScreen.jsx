import React from "react";
import { View, Image, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import { selectPhotos } from "../../redux/selectors";
import LoadingScreen from "../LoadingScreen/LoadingScreen";

const Photo = ({ route }) => {
  const photos = useSelector(selectPhotos);
  let image = photos.find(photo => photo.id === route.params.itemId);

  return (
    <View style={styles.container}>
      {image ? (
        <Image
          style={{ width: "100%", height: "100%", resizeMode: "center" }}
          source={{
            uri: image.urls.full,
          }}
          overflow={"hidden"}
        />
      ) : (
        <LoadingScreen />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Photo;
