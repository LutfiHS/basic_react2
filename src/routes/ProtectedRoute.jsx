import { Outlet, Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("access_token");
  if (token) {
    return <>{children || <Outlet />}</>;
  } else {
    return <Navigate to="/login" />;
  }
};

export default ProtectedRoute;
