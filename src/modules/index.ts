import { combineReducers } from "redux";
import productDetail from "./productDetail/productDetail";

const rootReducer = combineReducers({
  productDetail,
});

export default rootReducer;

// export type RootState = ReturnType<typeof rootReducer>;
