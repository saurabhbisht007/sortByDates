import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = {
  boxSizes: [100, 100, 100, 100],
  activeIndex: -1,
};

const boxSlice = createSlice({
  name: "box",
  initialState,
  reducers: {
    increaseSize: (state, action) => {
      const { index } = action.payload;

      state.boxSizes = state.boxSizes.map((size, i) => {
        if (i === index) {
          return size + 50;
        } else {
          return 100;
        }
      });

      state.activeIndex = index;
    },
  },
});

export const { increaseSize } = boxSlice.actions;

const store = configureStore({
  reducer: {
    box: boxSlice.reducer,
  },
});

export default store;
