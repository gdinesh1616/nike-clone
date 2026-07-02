import { createSlice } from "@reduxjs/toolkit";

const favouriteSlice = createSlice({
    name:"favourites",
    initialState:[],
    reducers:{
        setIsFavourites(state,action) {
            return action.payload;
        },
        toggleFavourite(state,action) {
            const id = action.payload;
            
            if (state.includes(id)) {
                return state.filter(item => item !== id);
            }

            state.push(id);
        },
        clearFavourites() {
            return [];
        },
    }
})

export const { setIsFavourites, toggleFavourite,clearFavourites } = favouriteSlice.actions;
export default favouriteSlice.reducer;