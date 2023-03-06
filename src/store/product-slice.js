import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


 export const getProducts = createAsyncThunk(
    'product/getProducts',
    async () => {
      const res = await fetch('https://fakestoreapi.com/products')
      const data = await res.json()
    return data;
  })

  const initialState = {
    products: [],
    loading: false,
    error: ""
}

const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {},
    extraReducers: {
        [getProducts.pending]: (state) => {
          state.loading = true
        },
        [getProducts.fulfilled]: (state, action) => {
          state.loading = false
          state.products = action.payload
          state.error = ""
        },
        [getProducts.rejected]: (state, action) => {
          state.loading = false
          state.products = []
          state.error = action.error.message
        },
      },
})


export default productSlice.reducer;