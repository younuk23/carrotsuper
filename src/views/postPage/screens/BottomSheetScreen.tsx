import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const BottomSheetScreen = ({ navigation }: any) => {
  const goToCamera = () => {
    navigation.navigate("Camera");
  };

  const goToAlbum = () => {
    navigation.navigate("Album");
  };

  return (
    <View style={styles.headerContainer}>
      <View style={styles.container}>
        <View
          style={{
            width: 30,
            height: 2,
            backgroundColor: "gray",
            marginBottom: 20,
          }}
        />
        <TouchableOpacity style={styles.bottomSheetBtn} onPress={goToCamera}>
          <Text style={{ color: "white", fontSize: 20 }}>카메라</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomSheetBtn} onPress={goToAlbum}>
          <Text style={{ color: "white", fontSize: 20 }}>앨범</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default BottomSheetScreen;

const styles = StyleSheet.create({
  headerContainer: {
    overflow: "hidden",
    paddingTop: 20,
  },
  container: {
    alignItems: "center",
    padding: 16,
    height: 200,
    backgroundColor: "#fcfcfc",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: -10,
    },
    shadowOpacity: 0.08,
    shadowRadius: 5.0,
    elevation: 8,
    marginBottom: -4,
  },
  bottomSheetBtn: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    backgroundColor: "gray",
    margin: 10,
  },
});
