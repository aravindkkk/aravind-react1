import { createSlice } from "@reduxjs/toolkit"; 

const addToCartSlices = createSlice({
    name : "cart",
    initialState : {
        items : [],
    },
    reducers : {
        addItemToCart :(state,action) => {
            state.items.push(action.payload);
        },
        removeItemFromCart : (state,action) => {
            state.items = state.items.filter((item,index) => index !== action.payload);
        },
        clearCart : (state) => {
            state.items.length = 0;
            //
          //  return {items : []};
        }

    }

});

export const { addItemToCart, removeItemFromCart, clearCart } = addToCartSlices.actions;
export default addToCartSlices.reducer;