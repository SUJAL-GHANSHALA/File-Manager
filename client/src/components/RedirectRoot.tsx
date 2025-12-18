import { Navigate } from "react-router-dom";

const RedirectRoot = () => {
    const isAuthenticated = localStorage.getItem("token");
    return isAuthenticated ? <Navigate to="/dashboard" replace /> : <Navigate to="/login" replace />;
}

export default RedirectRoot;