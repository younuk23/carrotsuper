import React, { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { ScrollView, View, StyleSheet } from "react-native";
import { SliderBox } from "react-native-image-slider-box";
import { useDispatch } from "react-redux";
import { ProfileBar, BottomBar, TopBar } from "~/components/productDetail";
import { dispatchUserSales } from "~/modules/productDetail/thunk";
import { useGetDetailData, useGetUserSales } from "~/hooks/useGetData";
import MainContent from "./MainContent";
import UserSalesList from "./UserSalesList";

interface PropsItem {
  navigation: any;
}

export const ProductDetailScreen: React.FC<PropsItem> = ({ navigation }) => {
  const dispatch = useDispatch();
  const userSales = useGetUserSales();
  const detailData = useGetDetailData();

  const {
    product_images,
    title,
    price,
    description,
    view,
    like_count,
    category,
    user_id,
    user,
  } = detailData;

  useEffect(() => {
    setUserSales(user_id);
  }, []);

  const setUserSales = (userId: number) => {
    dispatch(dispatchUserSales(user_id));
  };

  const newImgSrc = product_images?.map((item: { image_url: string }) => {
    return item.image_url;
  });

  return (
    <>
      <StatusBar style="auto" />
      <TopBar navigation={navigation} />
      <ScrollView>
        <SliderBox
          images={newImgSrc || []}
          sliderBoxHeight={400}
          dotColor="#fff"
          inactiveDotColor="#efefef"
          circleLoop
          loop
        />
        <View style={styles.container}>
          <ProfileBar User={user} />
          <MainContent
            title={title}
            description={description}
            category={category.name}
            view={view}
            likeCount={like_count}
          />
          <UserSalesList data={userSales} navigation={navigation} />
        </View>
      </ScrollView>
      <BottomBar price={price} />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 14,
  },
});
