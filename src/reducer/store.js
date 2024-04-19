import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../features/user/userSlice";
import uiSlice from "../features/common/uiSlice";
import productSlice from "../features/product/productSlice";
import cartSlice from "../features/cart/cartSlice";
import orderSlice from "../features/order/orderSlice";

const store = configureStore({
  reducer: {
    user: userSlice,
    product: productSlice,
    cart: cartSlice,
    ui: uiSlice,
    order: orderSlice,
  },
});
export default store;
