import { useState } from "react";
import AllProducts from "../components/AllProducts";
import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";
import Sidebar from "../components/Sidebar";
import '../css/Homepage.css'

export default function Homepage() {
    const [showLogin,setShowLogin] = useState(true);
    return (
        <>
            <Navbar></Navbar>
            <div className="content">
                <Sidebar></Sidebar>
                <AllProducts></AllProducts>
            </div>


        </>
    )
}