// import { createSlice } from "@reduxjs/toolkit";

// let initialState = {
//   isDrawerOpen: false,
// };

// const drawerSlice = createSlice({
//   name: "drawer",
//   initialState,
//   reducers: {
//     handleDrawerClose: (state, action) => {
//       state.isDrawerOpen = action.payload;
//     },
//   },
// });

// export const { handleDrawerClose } = drawerSlice.actions;
// export default drawerSlice.reducer;


import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isDrawerOpen: true,
  appState: ""
};

const combinedSlice = createSlice({
  name: "combinedSlice",
  initialState,
  reducers: {
    handleDrawerClose: (state, action) => {
      state.isDrawerOpen = action.payload;
    },
    setAppState: (state, action) => {
      state.appState = action.payload;
    }
  }
});

export const { handleDrawerClose, setAppState } = combinedSlice.actions;
export default combinedSlice.reducer;
