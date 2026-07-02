import { useDispatch, useSelector } from 'react-redux'
import '../css/Navbar.css'
import { logout, setShowlogin, setShowsignup } from '../features/AuthenticationSlice';
import { Link, useNavigate } from 'react-router-dom';
import { clearCart } from '../features/CartSlice';
import { clearFavourites } from '../features/FavouriteSlice';
import { useState } from 'react';

function Navbar() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [showProfile, setShowProfile] = useState(false);

    const user = useSelector((store)=>store.authentication.isLoggedIn)
    const userInfo = useSelector((store)=>store.authentication.userInfo)
    const handleLoginClick = ()=>{
        dispatch(setShowlogin(true));
    }
    const handleSignupClick = ()=>{
        dispatch(setShowsignup(true))
    }
    const handleLogoutClick = ()=>{
        navigate("/");
        dispatch(clearCart());
        dispatch(logout());
        dispatch(clearFavourites());
        console.log("loggedout")

    }


    return(
        <>
            <header className="header">
                <div className="header-top">

                    {!user && (<>
                    <a>Help</a>
                    <a onClick={handleSignupClick}>Sign Up</a>
                    <a onClick={handleLoginClick}>Log in</a>
                    </>
                    )}

                    {user && (<>
                        <a>Help</a>
                        <div 
                        onMouseEnter={() => setShowProfile(true)}
                        onMouseLeave={() => setShowProfile(false)}
                        className="profile"
                        >Hi, {userInfo.username}
                              {showProfile && (
        <div className="profile-menu">
          <p><strong>{userInfo.username}</strong></p>
          <p>{userInfo.emailId}</p>

          <button onClick={handleLogoutClick}>Logout</button>
        </div>
      )}</div>
                    </>)}
                    

                </div>
                <nav className="navbar">
                    <div className="navbar-logo">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Logo_NIKE.svg/500px-Logo_NIKE.svg.png" />
                    </div>
                    <div className="navbar-menu">
                        
                        <h3>New & Featured</h3>
                        <h3>Men</h3>
                        <h3>Women</h3>
                        <h3>Kids</h3>
                        <h3>Jordan</h3>
                    </div>
                    <div className="navbar-actions">
                        <a><i class="fa-solid fa-magnifying-glass"></i></a>
                        <Link to="/favourites"><i class="fa-regular fa-heart"></i></Link>
                        <Link to="/cart"><i class="fa-solid fa-cart-arrow-down"></i></Link>
                    </div>
                </nav>
                <div className="navbar-offer">
                    <h4>Enjoy 10% Off On The Nike App. Use: APP10</h4>
                </div>
            </header>

        </>
    )
}

export default Navbar