import React, { useEffect } from "react";
import {
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Text,
  Image,
} from "react-native";
import LoadingScreen from "../LoadingScreen/LoadingScreen";
import { useDispatch, useSelector } from "react-redux";
import { fetchPhotos } from "../../redux/photos/photosOperations";
import { selectPhotos } from "../../redux/selectors";

const Gallery = ({ navigation }) => {
  const photos = useSelector(selectPhotos);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPhotos());
  }, [dispatch]);

  return photos.length > 0 ? (
    <View style={styles.container}>
      <FlatList
        data={photos}
        numColumns={"2"}
        keyExtractor={item => item.id}
        renderItem={({ item }) => {
          const { description, alt_description, user, id, urls } = item;
          return (
            <View style={styles.photo}>
              <Text style={styles.text}>
                {description ? description : alt_description}
              </Text>
              <Text style={{ color: "#333333", ...styles.text }}>
                Author: {user.name}
              </Text>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("Photo", { itemId: id });
                }}
                activeOpacity={"0.8"}
              >
                <Image
                  style={styles.image}
                  source={{
                    uri: urls.small,
                  }}
                  overflow={"hidden"}
                />
              </TouchableOpacity>
            </View>
          );
        }}
      />
    </View>
  ) : (
    <LoadingScreen />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  photo: {
    alignItems: "center",
    justifyContent: "space-between",
    width: 160,
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderColor: "#cccccc",
    borderRadius: 4,
    borderWidth: 1,
    gap: 10,
  },
  image: {
    overflow: "hidden",
    width: 120,
    height: 150,
  },
  text: { textTransform: "capitalize" },
});

export default Gallery;
