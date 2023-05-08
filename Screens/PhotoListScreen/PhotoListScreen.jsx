import React, { useState, useEffect } from "react";
import { View, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import { fetchPhotos } from "../../redux/photos/photos-operations";
import { createApi } from "unsplash-js";
import LoadingScreen from "../LoadingScreen/LoadingScreen";

const API_KEY = "lIV1JLaKmf86_37iwuxWGhxvMdREGsZrjnCOJwotpQE";
const api = createApi({
  accessKey: API_KEY,
});

const Item = ({ item, onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <Text>Title:{item?.title}</Text>
  </TouchableOpacity>
);

const PhotoList = () => {
  const [photos, setPhotos] = useState(null);
  const [selectedId, setSelectedId] = useState("");

  useEffect(() => {
    api.photos
      .getRandom({ count: 10 })
      .then(result => {
        setPhotos(result.response.results);
        console.log(result.response.results);
      })
      .catch(() => {
        console.log("something went wrong!");
      });
  }, []);

  const renderItem = ({ item }) => {
    return <Item item={item} onPress={() => setSelectedId(item.id)} />;
  };

  return photos === null ? (
    <View>
      <LoadingScreen />
    </View>
  ) : photos.errors[0] ? (
    <>
      <View>{photos.errors[0]}</View>
      <View>Make sure to set your access token!</View>
    </>
  ) : (
    <View>
      <FlatList
        data={photos}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        extraData={selectedId}
      />
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

export default PhotoList;
