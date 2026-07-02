import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name:"cart",
    initialState:[],
    reducers:{
        setInCart(state,action) {
            return action.payload;
        },
        toggleAddToCart(state,action) {
            const id = action.payload;
            
            if (state.includes(id)) {
                return state.filter(item => item !== id);
            }

            state.push(id);
        },
        clearCart() {
            return [];
        }
    }
})
export const { setInCart, toggleAddToCart,clearCart} = cartSlice.actions;
export default cartSlice.reducer;