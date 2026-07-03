import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
    name:"filters",
    initialState:{
        categories:[],
        search:"",
        showSearchBar:false,
        searchFilters:[]
    },
    reducers:{
        setCategories(state,action){
            state.categories = action.payload;
        },
        setSearch(state,action) {
            state.search = action.payload;
        },
        setShowSearchBar(state,action){
            state.showSearchBar = action.payload
        },
        setSearchFilters(state,action){
            state.searchFilters = action.payload
        }

    }
})

export const {setCategories,setSearch,setShowSearchBar,setSearchFilters} = filterSlice.actions;
export default filterSlice.reducer;