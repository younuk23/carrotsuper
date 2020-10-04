import React from "react";
import { StatusBar } from "expo-status-bar";
import { ScrollView } from "react-native";
import { SliderBox } from "react-native-image-slider-box";
import {
  ProfileBar,
  BottomBar,
  TopBar,
  MainContent,
} from "../../../components/productDetail";

export function ProductDetailScreen() {
  return (
    <>
      <StatusBar style="inverted" />
      <TopBar />
      <ScrollView>
        <SliderBox
          images={IMAGE_URL}
          sliderBoxHeight={400}
          dotColor="#fff"
          inactiveDotColor="#efefef"
          circleLoop
          loop
        />
        <ProfileBar />
        <MainContent />
      </ScrollView>
      <BottomBar />
    </>
  );
}

const IMAGE_URL = [
  `https://dnvefa72aowie.cloudfront.net/origin/article/202010/779D09DCF02D4E946BB24D02A937117A3BDF262480D3F6A314D371698516C8CA.jpg?q=95&s=1440x1440&t=inside`,
  `https://dnvefa72aowie.cloudfront.net/origin/article/202010/1D13683B5870D369F6F27629EA1332F6E276ED1CFF55E6BCBD4AD089269A937B.jpg?q=95&s=1440x1440&t=inside`,
  `https://dnvefa72aowie.cloudfront.net/origin/article/202010/779D09DCF02D4E946BB24D02A937117A3BDF262480D3F6A314D371698516C8CA.jpg?q=95&s=1440x1440&t=inside`,
  `https://dnvefa72aowie.cloudfront.net/origin/article/202010/1D13683B5870D369F6F27629EA1332F6E276ED1CFF55E6BCBD4AD089269A937B.jpg?q=95&s=1440x1440&t=inside`,
];
