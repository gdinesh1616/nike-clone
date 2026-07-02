import { useState } from "react";
import "../css/Login.css"
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setLoginStatus, setShowlogin, setUserInfo } from "../features/AuthenticationSlice";
import { setIsFavourites } from "../features/FavouriteSlice";
import { setInCart } from "../features/CartSlice";

const Login = () => {
    const dispatch = useDispatch();

    const [formData, setFormData] = useState({
        email:"",
        password:""
    });
    const handleLoginCloseClick = ()=>{
      dispatch(setShowlogin(false));
    }

    const handleChange = (e)=>{
        setFormData({...formData,
            [e.target.name] : e.target.value
    })
    }

    const handleSubmit = async (e)=>{
        e.preventDefault();

        const response = await axios.get(`http://localhost:3000/users?emailId=${formData.email}`)

        const user = response.data[0];

        if(!user){
            setFormData({email:"",password:""})
            alert("User doesn't exist")
            return
        }

        if(user.password === formData.password){
            dispatch(setShowlogin(false));
            dispatch(setLoginStatus(true));
            dispatch(setIsFavourites(user.favourites))
            dispatch(setInCart(user.cart));
            dispatch(setUserInfo({username:user.username,emailId:user.emailId,userId:user.id}))

        } else{
            setFormData({...formData,
                password:""
            })
            alert("Wrong password");
        }
    }


  return (
                <div className="overlay">
                <div className="login-modal">
                            <button onClick={handleLoginCloseClick} class="to-back-btn"><i class="fa-solid fa-x"></i></button>

                            <form onSubmit={handleSubmit}>
                                <h1>Login to your Account</h1>
                                <h3>Enter Your Email Id: </h3>
                                <input name="email" type="email" onChange={handleChange} value={formData.email} class="form-input" required></input>
                                <h3>Enter Your Password</h3>
                                <input name="password" type="password" onChange={handleChange} value={formData.password} class="form-input" required></input>
                                <button type="submit" class="submit-btn">Submit</button>
                                <p>Don't have an account? <a>Register here</a></p>
                            </form>
                </div>
                </div>
  )
}

export default Login