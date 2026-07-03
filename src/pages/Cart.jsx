import { useSelector } from "react-redux"
import Navbar from "../components/Navbar"
import ProductCard from "../components/ProductCard";
import "../css/Cart.css"
import { useState } from "react";
const Cart = () => {
    const cartItemIds = useSelector((state)=>state.cart);
    const allProducts = useSelector((state)=>state.products.allProducts);
    const favouriteProductIds = useSelector((store)=>store.favourites);
    let totalPrice = 0;

    const cartItems = allProducts.filter((item)=>cartItemIds.includes(item.id));
    for(let i=0;i<cartItems.length;i++){
        totalPrice+=cartItems[i].price;
    }
  return (
    <>
        <Navbar></Navbar>
        <div>
            <h2>Cart</h2>
            <div class="all-products">
                    {
                      cartItems.map((product) => {
                      return <ProductCard key={product.id} product={product} inCart={true} isFavourite={favouriteProductIds.includes(product.id)}></ProductCard>})
                    }
            </div>
            <div class="cart-summary">
                <div>
                    <p>Total Price: {totalPrice}</p>
                </div>
                <div>
                    Checkout 
                </div>
            </div>
        </div>
    </>
  )
}

export default Cart