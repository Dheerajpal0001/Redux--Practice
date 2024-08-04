import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    cartItems: [],
    subTotal: 0,
    shipping: 0,
    Tax: 0,
    Total: 0,
}

export const cartData = createSlice({
    name: 'Cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const item = action.payload;
            const isItemExist = state.cartItems.find((i) => i.id === item.id);

            if (isItemExist) {
                console.log("already exist");
                state.cartItems.forEach((i) => {
                    if (i.id === item.id) i.quantity += 1;
                })
            } else {
                state.cartItems.push(item);
            }
        },
        decrement: (state, action) => {
            const item = action.payload;
            const idFound = state.cartItems.find((i) => i.id === item);
            // const item = state.cartItems.find((i)=> i.id === action.payload);
            // console.log(item);
            if (idFound.quantity > 1) {
                state.cartItems.forEach((e) => {
                    if (e.id === idFound.id) {
                        e.quantity -= 1;
                    }
                })
            }

        },
        deleteFromCart: (state, action)=>{
            state.cartItems = state.cartItems.filter((i)=>
                i.id !== action.payload
            );
        }
    }

})

export const { addToCart, decrement, deleteFromCart} = cartData.actions;

export default cartData.reducer;