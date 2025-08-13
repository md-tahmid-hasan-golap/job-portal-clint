import React, { useContext } from "react";
import { AuthContext } from "../firebase/FirebaseAuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRouter = ({ children }) => {
  const { user, loding } = useContext(AuthContext);
  const location = useLocation();

  if (loding) {
    return <span className="loading loading-ring loading-xl"></span>;
  }

  if (!user) {
    return <Navigate to="/signIn" state={{ from: location }} replace />;
  }

  return children;
};

export default PrivateRouter;
