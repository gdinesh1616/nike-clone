import { configureStore } from '@reduxjs/toolkit'
import productReducer from "../features/product.js";
import filterReducer from "../features/FilterSlice.js"
import favouriteReducer from "../features/FavouriteSlice.js"
import cartReducer from "../features/CartSlice.js"
import authenticationReducer from "../features/AuthenticationSlice.js"


export const store = configureStore({
  reducer: {
    products:productReducer,
    filters:filterReducer,
    favourites:favouriteReducer,
    cart:cartReducer,
    authentication:authenticationReducer
  },
})