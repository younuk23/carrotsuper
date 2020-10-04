import { StyleSheet } from "react-native";

const fontSize = {
  XXL: 20 as const,
  XL: 18 as const,
  L: 17 as const,
  M: 16 as const,
  S: 15 as const,
  XS: 14 as const,
  XXS: 13 as const,
};

const fontWeight = {
  BOLD: "700" as const,
  NORMAL: "500" as const,
  WEIGHT: "400" as const,
};

const color = {
  address: "#868E96" as const,
  mannerBad: "#1561a9" as const,
  mannerNormal: "#319E45" as const,
  mannerGood: "#ff8a3d" as const,
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
