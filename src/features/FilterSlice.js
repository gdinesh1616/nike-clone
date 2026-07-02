import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
    name:"filters",
    initialState:{
        categories:[],
    },
    reducers:{
        setCategories(state,action){
            state.categories = action.payload;
        }
    }
})

export const {setCategories} = filterSlice.actions;
export default filterSlice.reducer;