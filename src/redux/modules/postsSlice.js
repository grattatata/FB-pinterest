import { createAsyncThunk } from "@reduxjs/toolkit";

export const __addPostThunk = createAsyncThunk(
  "ADD_POST",
  async (arg, thunkAPI) => {
    try {
      const { data } = await axios.post(`${serverUrl}/post`, arg);
      return thunkAPI.fulfillWithValue(data);
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);

const initialState = {
  todos: [],
  error: null,
  isLoading: false,
  isSuccess: false,
};
