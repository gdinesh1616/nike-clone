import { createSlice } from "@reduxjs/toolkit";

const authenticationSlice = createSlice({
    name:"authentication",
    initialState:{
        isLoggedIn:false,
        showLogin:false,
        showSignup:false,
        token:"",
        userInfo:{
            username:"",
            emailId:"",
            userId:""
        }

    },
    reducers:{
        setShowlogin(state,action){
            state.showLogin = action.payload;
        },
        setShowsignup(state,action) {
            state.showSignup = action.payload;
        },
        setToken(state, action) {
            state.token = action.payload;
        },
        setLoginStatus(state,action) {
            state.isLoggedIn = action.payload
        },
        setUserInfo(state,action){
            state.userInfo = action.payload
        },
        logout(state) {
            return {
        isLoggedIn:false,
        showLogin:false,
        showSignup:false,
        token:"",
        userInfo:{
            username:"",
            emailId:"",
            userId:""
        }

    };
        }
    }
})

export const {setShowlogin,setShowsignup,setToken,setLoginStatus,setUserInfo,logout} = authenticationSlice.actions;
export default authenticationSlice.reducer;