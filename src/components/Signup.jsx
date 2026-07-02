import { useState } from "react";
import "../css/Signup.css"
import { useDispatch } from "react-redux";
import { setShowsignup } from "../features/AuthenticationSlice";
import axios from "axios";
const Signup = () => {
    const dispatch = useDispatch();
    const [formData,setFormData] = useState({
        emailId:"",
        password:"",
        username:"",
    })
    const handleSignupCloseClick = ()=>{
      dispatch(setShowsignup(false));
    }

    const handleChange = (e)=>{
        setFormData({...formData,
            [e.target.name] : e.target.value
    })
    }

    const handleSubmit = async (e)=>{
        e.preventDefault();

        const response = await axios.get("http://localhost:3000/users");
        const res = response.data;
        for(let i=0; i<res.length; i++){
            if(formData.emailId === res[i].emailId){
                alert("email already used");
                return;
            }
        }
        const res2 = await axios.post("http://localhost:3000/users",formData);
        dispatch(setShowsignup(false))

    }



  return (
                  <div className="overlay">
                  <div className="login-modal">
                <button onClick={handleSignupCloseClick} class="to-back-btn"><i class="fa-solid fa-x"></i></button>
                      <form onSubmit={handleSubmit}>
                          <h1>Sign Up</h1>
                          <h3>Enter Your Email Id: </h3>
                          <input type="text" name="emailId" onChange={handleChange} value={formData.emailId} class="form-input" required></input>
                          <h3>Enter Your Password</h3>
                          <input type="password" onChange={handleChange} name="password" value={formData.password} class="form-input" required></input>
                          <h3>Set Username</h3>
                          <input type="text" onChange={handleChange} name="username" value={formData.username} class="form-input" required></input>
                          <button class="submit-btn">Submit</button>
                      </form>
                  </div>
                  </div>
  )
}

export default Signup
