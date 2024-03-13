// import { createSlice, createAction } from "@reduxjs/toolkit";

// const initialState = {
//     products: [],
// };

// const cartSlice = createSlice({
//     name: 'cart',
//     initialState,
//     reducers: {
//         addProduct: (state, action) => {
//             const { id } = action.payload;
//             const productIndex = state.products.findIndex(product => product.id === id);
//             if (productIndex !== -1) {
//                 state.products[productIndex].quantity += 1;
//             } else {
//                 state.products.push({ ...action.payload, quantity: 1 });
//             }
//         },
//     },
// });

// export const { addProduct } = cartSlice.actions;
// export default cartSlice.reducer;
