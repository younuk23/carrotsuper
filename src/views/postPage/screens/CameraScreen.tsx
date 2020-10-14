import React, { useState, useEffect, useRef } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";
import { Camera } from "expo-camera";

const DEVICE_WIDTH = Dimensions.get("window").width;

export const CameraScreen = () => {
  const [hasPermission, setHasPermission] = useState(false);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [flashMode, setFlashMode] = useState(Camera.Constants.FlashMode.off);
  const cameraRef = useRef<Camera>(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }

  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  const onCameraReady = () => {
    console.log("Camera is ready!");
  };

  const takePicture = async () => {
    if (cameraRef.current) {
      let photo = await cameraRef.current.takePictureAsync({
        quality: 1,
        base64: false,
      });
      console.log(photo);
    }
  };

  return (
    <>
      <View style={{ flex: 1 }}>
        <Camera
          ref={cameraRef}
          style={{ flex: 1 }}
          type={type}
          flashMode={flashMode}
          onCameraReady={onCameraReady}
          ratio={`${DEVICE_WIDTH}:${DEVICE_WIDTH}`}
        >
          <View
            style={{
              flex: 1,
              backgroundColor: "transparent",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          ></View>
        </Camera>
      </View>
      <View style={styles.bottomContainer}>
        <View style={styles.buttonWrapper}>
          <TouchableOpacity
            style={styles.flipButton}
            onPress={() => {
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              );
            }}
          >
            <Text style={{ fontSize: 18, color: "gray" }}>Flip</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.flipButton} onPress={takePicture}>
            <Text style={{ fontSize: 18, color: "gray" }}>Touch</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.flipButton}
            onPress={() => {
              setFlashMode(
                flashMode === Camera.Constants.FlashMode.torch
                  ? Camera.Constants.FlashMode.off
                  : Camera.Constants.FlashMode.torch
              );
            }}
          >
            <Text style={{ fontSize: 18, color: "gray" }}>Flash</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  flipButton: {
    alignSelf: "flex-end",
    alignItems: "center",
    marginBottom: 40,
    padding: 15,
    borderRadius: 15,
    backgroundColor: "white",
  },
  bottomContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "black",
  },
  buttonWrapper: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    paddingTop: 15,
  },
});
