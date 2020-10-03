import { StyleSheet } from "react-native";

const fontSize = {
  XXL: 20,
  XL: 18,
  L: 17,
  M: 16,
  S: 15,
  XS: 14,
  XXS: 13,
};

const fontWeight = {
  BOLD: "700" as const,
  NORMAL: "500" as const,
  WEIGHT: "400" as const,
};

const color = {
  address: "#868E96",
  mannerBad: "#1561a9",
  mannerNormal: "#319E45",
  mannerGood: "#ff8a3d",
};

export const typo = StyleSheet.create({
  title: {
    fontSize: fontSize.XXL,
    fontWeight: fontWeight.BOLD,
  },

  tabTitle: {
    fontSize: fontSize.L,
    fontWeight: fontWeight.NORMAL,
  },

  listTitle: {
    fontSize: fontSize.M,
    fontWeight: fontWeight.NORMAL,
  },

  price: {
    fontSize: fontSize.S,
    fontWeight: fontWeight.BOLD,
  },

  listAddress: {
    fontSize: fontSize.XS,
    fontWeight: fontWeight.NORMAL,
    color: color.address,
  },

  listLike: {
    fontSize: fontSize.XS,
    fontWeight: fontWeight.NORMAL,
  },

  mannerBad: {
    fontSize: fontSize.M,
    fontWeight: fontWeight.BOLD,
    color: color.mannerBad,
  },

  mannerNormal: {
    fontSize: fontSize.M,
    fontWeight: fontWeight.BOLD,
    color: color.mannerNormal,
  },

  mannerGood: {
    fontSize: fontSize.M,
    fontWeight: fontWeight.BOLD,
    color: color.mannerGood,
  },

  author: {
    fontSize: fontSize.S,
    fontWeight: fontWeight.BOLD,
  },

  description: {
    fontSize: fontSize.L,
  },

  detailMoreListTitle: {
    fontSize: fontSize.XS,
    fontWeight: fontWeight.NORMAL,
  },

  requestDeal: {
    fontSize: fontSize.S,
    fontWeight: fontWeight.BOLD,
    color: "white",
  },
});
