import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../../../context/AuthContext";

export const ProtectedRoute = ({ children }: any) => {
    const { user } = useContext(AuthContext);

    if (!user.fullname) {
        return <Navigate to="/" replace />;
    }

    return children;
};
