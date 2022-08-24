import { createSlice, createAsyncThunk,} from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  items: [],
  status: "null",
};

export const ProductsFetch = createAsyncThunk(
  "Products/ProductsFetch",
  async (id=null) => {
    const response = await axios.get("http://localhost:5000/Products");
    return response?.data;
  }
);

const ProductSlice = createSlice({
  name: "Products",
  initialState,
  reducers: {},
  extraReducers: {
    [ProductsFetch.pending]: (state, action) => {
      state.status = "pending";
    },
    [ProductsFetch.fulfilled]: (state, action) => {
      state.status = "Success";
      state.items = action.payload
    },
    [ProductsFetch.rejected]: (state, action) => {
      state.status = "rejected";
    },
  },
});

export default ProductSlice.reducer;
