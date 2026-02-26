import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const homeSlcie = createSlice({
  name: "home", //
  initialState: {
    counter: 1000,
    homeInfo: {},
  },
  reducers: {
    increment(state, action) {
      const { payload } = action;
      console.log("action->", action);

      // action: { type:home/increment/状态, payload: 1 }
      console.log("payload=>", payload);
      state.counter += payload;
    },
  },
  extraReducers: (buidler) => {
    // type: fetchHomeData/状态
    // fetchHomeData.fulfilled 为fulfilled状态走后面的函数
    buidler.addCase(fetchHomeData.fulfilled, (state, { payload, type }) => {
      console.log("type=>", type);
      console.log("payload=>", payload);
      state.homeInfo = payload;
    });
  },
});

// 异步的action -> axios
export const fetchHomeData = createAsyncThunk(
  "fetchHomeData",
  async (payload, { dispatch, getState }) => {
    // const res = await axios.get("http://codercba.com:9060/juanpi/api/homeInfo");
    // return res.data;
    return { code: 200, data: { msg: "5555" } };
  }
);

// 同步的 action
export const { increment } = homeSlcie.actions;
// home 切片生成的 reducer
export default homeSlcie.reducer;
