import React, { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { ScrollView, View, StyleSheet } from "react-native";
import { SliderBox } from "react-native-image-slider-box";
import { useDispatch } from "react-redux";
import { ProfileBar, BottomBar, TopBar } from "~/components/productDetail";
import { fetchUserSales } from "~/modules/productDetail/thunk";
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
    Product_images,
    title,
    price,
    description,
    view,
    like_count,
    Category,
    user_id,
    User,
  } = detailData;

  useEffect(() => {
    setUserSales(user_id);
  }, []);

  const setUserSales = (userId: number) => {
    dispatch(fetchUserSales(user_id || 1));
  };

  const newImgSrc = Product_images.map((item: { image_url: string }) => {
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
          <ProfileBar User={User} />
          <MainContent
            title={title}
            description={description}
            category={Category.name || "기타중고상품"}
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
