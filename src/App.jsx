import { useDispatch, useSelector } from 'react-redux'
import { Routes, Route } from "react-router-dom";

import './App.css'
import Homepage from './pages/Homepage'
import { setProducts } from './features/product'
import { useEffect } from "react"
import { setIsFavourites } from './features/FavouriteSlice'

import Favourite from './pages/Favourite';
import { setInCart } from './features/CartSlice';
import Cart from './pages/Cart';
import Login from './components/Login';
import Signup from './components/Signup';
import { setShowlogin, setShowsignup } from './features/AuthenticationSlice';
import ProtectedRoute from './pages/Protectedroute';

function App() {
    const response = useSelector((state)=>state);
    const showLogin = useSelector((state)=>state.authentication.showLogin)
    const showSignup = useSelector((state)=>state.authentication.showSignup)
      const currentUser = useSelector((store) => store.authentication.isLoggedIn);
      const userId = useSelector((state)=>state.authentication.userInfo.userId);
    const dispatch = useDispatch();
    useEffect(()=>{
        const fetchData = async ()=>{
            const response = await fetch("http://localhost:3000/products")
            const result = await response.json();
            dispatch(setProducts(result));
        }
        fetchData();
    },[])



  return (

    <>
    <Routes>
        <Route path="/" element={<Homepage/>}></Route>
        <Route path="/favourites" element={<ProtectedRoute><Favourite/></ProtectedRoute>}></Route>
        <Route path="/cart" element={<ProtectedRoute><Cart/></ProtectedRoute>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/signup" element={<Signup/>}></Route>


    </Routes>
                {showLogin && (<Login/>)}
                {showSignup && (<Signup/>)}
    </>
  )
}

export default App
