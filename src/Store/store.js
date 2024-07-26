import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./Auth/AuthSlice";
import drawerReducer from "./Drawer/DrawerSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    drawer: drawerReducer,
  },
});
