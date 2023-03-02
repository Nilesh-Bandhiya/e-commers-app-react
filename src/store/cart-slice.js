import { createSlice } from "@reduxjs/toolkit";

 const cartSlice = createSlice({
    name: "cart",
    initialState:{
        products:[],
        totalQuantity: 0,
    },
    reducers:{
        addItemToCart(state, action){
            const newProduct = action.payload;
            const existingProduct = state.products.find((product) => product.id === newProduct.id)
            state.totalQuantity++;
            if(!existingProduct){
                state.products.push({
                    id: newProduct.id,
                    image: newProduct.image,
                    title: newProduct.title,
                    price: newProduct.price,
                    quantity: 1,
                    totalprice: newProduct.price
                })
            } else {
                existingProduct.quantity++;
                existingProduct.totalprice = existingProduct.totalprice + newProduct.price;
            }
        },
        removeItemToCart(state, action){
            const id = action.payload;
            const existingProduct = state.products.find((product) => product.id === id)
            state.totalQuantity--;
            if(existingProduct.quantity === 1){
                state.products = state.products.filter(product => product.id !== id);
            } else {
                existingProduct.quantity--;
                existingProduct.totalprice = existingProduct.totalprice - existingProduct.price;
            }
        }
    }
})

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;