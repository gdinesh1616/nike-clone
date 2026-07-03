import { useState } from "react";
import AllProducts from "../components/AllProducts";
import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";
import Sidebar from "../components/Sidebar";
import '../css/Homepage.css'

export default function Homepage() {

    const [showSidebar,setShowSidebar] = useState(false);
    const handleClick = ()=>{
        if(showSidebar){
                    setShowSidebar(false);
                    return;

        }
        setShowSidebar(true);
    }
    return (
        <>
            <Navbar></Navbar>
            <button class="show-filters-btn" onClick={handleClick}>Show Filters</button>
            <div className="content">
                {showSidebar?<Sidebar></Sidebar>:""}
                
                <AllProducts></AllProducts>
            </div>

            
        </>
    )
}