import Navbar from "../components/Navbar"
import { useSelector } from "react-redux"
import ProductCard from "../components/ProductCard";
import '../css/AllProducts.css'
const Favourite = () => {
    const favouriteProductIds = useSelector((store)=>store.favourites);
    const allProducts = useSelector((store)=>store.products.allProducts);
    const cartItemIds = useSelector((state)=>state.cart);

    const favouriteProducts = allProducts.filter((product) =>favouriteProductIds.includes(product.id))
  return (
    <>
        <Navbar></Navbar>
        <div>
            <h2>Your Favourites</h2>
            <div className="all-products">
                {
      favouriteProducts.map((product) => {
      return <ProductCard key={product.id} product={product} isFavourite={true} inCart={cartItemIds.includes(product.id)}></ProductCard>})
    }
            </div>
        </div>
    </>

  )
}

export default Favourite