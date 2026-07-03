import { useSelector } from "react-redux"
import ProductCard from "./ProductCard"
import '../css/AllProducts.css'


const AllProducts = () => {
    const products = useSelector((state) => state.products.allProducts)
    const categories = useSelector((state) => state.filters.categories);
    const favourites = useSelector((state) => state.favourites)
    const cartItems = useSelector((state)=>state.cart)
    const searchFilters = useSelector((state)=>state.filters.searchFilters)
 
  console.log(categories,searchFilters)
  const accordionfilteredProducts =
    categories.length === 0? products: products.filter(product =>
              categories.includes((product.type)) 
          );
  const searchfilteredProducts =
    searchFilters.length === 0? accordionfilteredProducts: products.filter(product =>
              searchFilters.includes((product.id)) 
  );
  console.log(searchfilteredProducts,"here")
  return (
    <div className="all-products">{
      searchfilteredProducts.map((product) => {
      return <ProductCard key={product.id} product={product} isFavourite={favourites.includes(product.id)} inCart={cartItems.includes(product.id)}></ProductCard>})
    }</div>
  )
}

export default AllProducts