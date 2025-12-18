import {Navigate} from "react-router-dom";

const GuestGuard = ({children}: {children: React.ReactNode}) => {
    const isAuthenticated = localStorage.getItem("token");

    return !isAuthenticated ? <>{children}</> : <Navigate to="/dashboard" />;
}

export default GuestGuard;