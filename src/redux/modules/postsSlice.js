// import { createAsyncThunk } from "@reduxjs/toolkit";

// export const __addPostThunk = createAsyncThunk(
//   "ADD_POST",
//   async (arg, thunkAPI) => {
//     try {
//       const { data } = await axios.post(`${serverUrl}/post`, arg);
//       return thunkAPI.fulfillWithValue(data);
//     } catch (e) {
//       return thunkAPI.rejectWithValue(e);
//     }
//   }
// );

// const initialState = {
//   pins: [],
//   error: null,
//   isLoading: false,
//   isSuccess: false,
// };

// export const postSlice = createSlice({
//   name: "postList",
//   reducers: {},
//   extraReducers: {
//     [getList.fulfilled]: (state, { payload }) => [...payload],
//     [uploadList.fulfilled]: (state, { payload }) => [...state, payload],
//       return [payload];
//     },
//   },
// });

// export default postSlice;
