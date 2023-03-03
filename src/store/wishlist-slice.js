import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice = createSlice({
    name: "wishlist",
    initialState: {
        products: [],
    },
    reducers: {
        toggleItemToWishlist(state, action) {
            const newId = action.payload;
            const existingProductId = state.products.find((id) => id === newId)
            if (!existingProductId) {
                state.products.push(newId)
            } else {
                state.products = state.products.filter(id => id !== existingProductId);
            }
        },
    }
})

export const wishlistActions = wishlistSlice.actions;

export default wishlistSlice.reducer;