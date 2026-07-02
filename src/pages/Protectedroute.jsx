import { Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setShowlogin } from "../features/AuthenticationSlice";

function ProtectedRoute({ children }) {
    const dispatch = useDispatch()
  const currentUser = useSelector((store) => store.authentication.isLoggedIn);
  if(!currentUser){
    dispatch(setShowlogin(true))
  }

  return children;
}

export default ProtectedRoute;