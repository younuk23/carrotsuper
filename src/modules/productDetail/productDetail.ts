const GET_USER_SALES = "productDetail/GET_USER_SALES";
const GET_DETAIL_DATA = "productDetail/GET_DETAIL_DATA";

type UsersItem = {
  address: string;
  name: string;
  manner: number;
};

interface DataType {
  id: string;
  product_images: { image_url: string }[];
  user_id?: string;
  address?: string;
  manner?: string;
  title: string;
  description?: string;
  category_id?: string;
  categories?: { name: string }[];
  price: string;
  like_count: number;
  created_at?: number;
  view: number;
  users?: UsersItem[];
}

interface GetUserSales {
  type: typeof GET_USER_SALES;
  payload: DataType[];
}

interface GetDetailData {
  type: typeof GET_DETAIL_DATA;
  payload: DataType;
}

type contentAction = GetUserSales | GetDetailData;

export const getUserSales = (userSales: DataType[]) => ({
  type: GET_USER_SALES,
  payload: userSales,
});

export const getDetailData = (detailData: any) => ({
  type: GET_DETAIL_DATA,
  payload: detailData,
});

const INITIAL_STATE = {
  userSales: [],
  detailData: {},
};

export default function productDetail(
  state = INITIAL_STATE,
  action: contentAction
) {
  switch (action.type) {
    case GET_USER_SALES:
      return {
        ...state,
        userSales: action.payload,
      };
    case GET_DETAIL_DATA:
      return {
        ...state,
        detailData: action.payload,
      };
    default:
      return state;
  }
}
