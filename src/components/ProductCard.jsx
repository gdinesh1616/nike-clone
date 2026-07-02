import { useState } from 'react';
import '../css/ProductCard.css'
import { useDispatch , useSelector} from 'react-redux';
import { toggleFavourite } from '../features/FavouriteSlice';
import { toggleAddToCart } from '../features/CartSlice';
import axios from "axios"
import { setShowlogin } from '../features/AuthenticationSlice';

export default function ProductCard(prop) {
    const dispatch = useDispatch();

    const favourites = useSelector((state) => state.favourites)
    const userId = useSelector((store)=>store.authentication.userInfo.userId);

    const handleClick = async ()=>{
        if(!userId){
            dispatch(setShowlogin(true));
            return
        }
        dispatch(toggleFavourite(prop.product.id));
         const updatedFavorites = favourites.includes(prop.product.id)
        ? favourites.filter(item => item !== prop.product.id)
        : [...favourites, prop.product.id];
            await axios.patch(`http://localhost:3000/users/${userId}`,
                {
                    favourites: updatedFavorites
                }
            );
    }

    const cartItems = useSelector((store)=>store.cart)

    const handleCartClick = async ()=>{
        if(!userId){
            dispatch(setShowlogin(true));
            return
        }
        dispatch(toggleAddToCart(prop.product.id));

        const updatedCart = cartItems.includes(prop.product.id)
        ?cartItems.filter(item => item !== prop.product.id)
        :[...cartItems,prop.product.id];

        await axios.patch(`http://localhost:3000/users/${userId}`,
                {
                    cart: updatedCart
                }
            );
    }

    return (
        <>
        <div className="product-card">
            <a>
                <img src={prop.product.image}></img>
                <div className="product-card-info">
                    <h3>
                        {prop.product.name}
                    </h3>
                    <p>
                        {prop.product.description}
                    </p>
                    <h3>
                        &#8377; {prop.product.price}
                    </h3>
                    <div style={{display:"flex"}}>
                        <button className="favourite-button" onClick={handleClick}>{prop.isFavourite?<i class="fa-solid fa-heart fa-xl"></i>:<i class="fa-regular fa-heart fa-xl"></i>}</button>
                        <button className="cart-button" onClick={handleCartClick} style={prop.inCart?{color:"white",background:"black"}:{color:"black",background:"white",border:"2px solid black"}}>{prop.inCart? "Remove from your Cart" : "Add to your Cart"}</button>
                    </div>
                    
                </div>
            </a>
        </div>
        </>
    )
}