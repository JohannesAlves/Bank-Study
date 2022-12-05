import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../../../context/AuthContext";

type Props = {
    children: JSX.Element | JSX.Element[] | string | string[];
};

export const ProtectedRoute = ({ children }: Props) => {
    const { user } = useContext(AuthContext);

    if (!user.fullname) {
        return <Navigate to="/" replace />;
    }

    return children;
};
