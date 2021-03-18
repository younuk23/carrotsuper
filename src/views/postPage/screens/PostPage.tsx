import React, { useRef } from "react";
import { StyleSheet, Text, View, ScrollView, TextInput } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import {
  MaterialCommunityIcons,
  MaterialIcons,
  FontAwesome5,
} from "@expo/vector-icons";
import BottomSheet from "reanimated-bottom-sheet";
import { StatusBar } from "expo-status-bar";
import { theme } from "~/styles";
import { FormRow } from "~/components/postPage";
import { SafeHead } from "~/components/common";
import BottomSheetScreen from "./BottomSheetScreen";

export const PostPage = ({ navigation }: any) => {
  const address = "돈암제1동"; //추후 로그인시 주소받아 리덕스 스토어에 저장 예정
  const sheetRef = useRef<BottomSheet>(null);

  const renderContent = () => {
    return <BottomSheetScreen navigation={navigation} />;
  };

  return (
    <>
      <View style={styles.container}>
        <SafeHead title="중고거래 글쓰기" />
        <ScrollView style={styles.scrollContainer}>
          <TouchableOpacity
            onPress={() => {
              if (sheetRef.current !== null) {
                sheetRef.current?.snapTo(0);
              }
            }}
          >
            <View style={styles.cameraContainer}>
              <View style={styles.cameraIconContainer}>
                <MaterialCommunityIcons
                  name="camera"
                  size={24}
                  color="rgba(0,0,0,0.4)"
                />
                <Text style={styles.cameraText}>0/10</Text>
              </View>
            </View>
          </TouchableOpacity>
          <FormRow>
            <TextInput style={styles.postTitle} placeholder="글 제목" />
          </FormRow>
          <FormRow>
            <TouchableOpacity>
              <View style={styles.categoryBox}>
                <Text style={styles.postTitle}>카테고리 선택</Text>
                <MaterialIcons name="navigate-next" size={20} color="black" />
              </View>
            </TouchableOpacity>
          </FormRow>
          <FormRow>
            <TextInput
              style={styles.postTitle}
              placeholder="₩ 가격 입력(선택사항)"
            />
          </FormRow>
          <View>
            <TextInput
              multiline
              maxLength={500}
              style={styles.description}
              placeholder={`${address}${DESCRIPTION}`}
            />
          </View>
          <View style={styles.submitContainer}>
            <TouchableOpacity>
              <View style={styles.submitBtn}>
                <Text style={{ fontSize: 20, color: "white" }}>당근</Text>
                <FontAwesome5 name="carrot" size={24} color="white" />
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>
        <StatusBar style="auto" />
      </View>
      <BottomSheet
        ref={sheetRef}
        initialSnap={2}
        snapPoints={[200, 100, 0]}
        renderContent={renderContent}
        enabledContentTapInteraction={false}
        enabledBottomInitialAnimation
      />
    </>
  );
};

const DESCRIPTION = `에 올릴 게시글 내용을 작성해주세요.(가품 및 판매금지품목은 게시가 제한될 수 있어요.`;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  scrollContainer: {
    flex: 1,
    paddingHorizontal: 15,
  },
  cameraContainer: {
    flex: 1,
    flexDirection: "row",
    paddingVertical: 7,
    borderBottomColor: "rgba(0,0,0,0.11)",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  cameraIconContainer: {
    justifyContent: "center",
    paddingVertical: 10,
    paddingHorizontal: 18,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "rgba(0,0,0,0.2)",
  },
  cameraText: {
    fontSize: 13,
    color: "rgba(0,0,0,0.3)",
  },
  postTitle: {
    paddingVertical: 25,
    fontSize: 17,
  },
  categoryBox: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  description: {
    marginVertical: 20,
    fontSize: 17,
    lineHeight: 25,
  },
  submitContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 30,
  },
  submitBtn: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 13,
    backgroundColor: theme.orange,
    borderRadius: 15,
    opacity: 0.7,
  },
});
