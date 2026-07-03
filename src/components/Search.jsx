import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setCategories, setSearchFilters } from "../features/FilterSlice";
import '../css/Search.css'

const Search = () => {
    const allProducts = useSelector((state)=>state.products.allProducts);
    const dispatch = useDispatch();
    const [formData,setFormData] = useState({
        search:""
    })
    const handleChange = (e)=>{
        setFormData({...formData,
            [e.target.name]:e.target.value
        })
        const filteredProducts = allProducts.filter((product) =>
            product.name.toLowerCase().includes(e.target.value.toLowerCase())
        );
        let ids = filteredProducts.map((product)=>product.id)
        if(ids.length === allProducts.length){
            ids=[];
        }
        dispatch(setSearchFilters(ids));
    }

  return (<>
   
            <label htmlFor="search"></label>
            <input className="search-input" name="search" placeholder="search products..." id="search-input" value={formData.search} onChange={handleChange}></input>
</>
  )
}

export default Search