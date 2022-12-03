import React, { createContext, ReactNode, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { api } from "../api/api";

type AuthContextProps = {
    children: ReactNode;
};

interface IUser {
    token: string;
    userId: string;
    fullname: string;
}

interface IAuthContext {
    handleLogin: (cpf: string) => void;
    user: IUser;
    logout: () => void;
}

const AuthContext = createContext({} as IAuthContext);

function AuthProvider({ children }: AuthContextProps) {
    const [user, setUser] = useState<IUser>({} as IUser);
    const token = localStorage.getItem("token");
    const navigate = useNavigate();

    const handleLogin = async (cpf: string) => {
        const dataPost = {
            cpf,
        };
        try {
            const response = await api.post("/login", dataPost);
            // localStorage.setItem("token", response.token);
            // setUser(response);
            navigate("/");
        } catch (err) {
            throw new Error("Not authorized!");
        }
    };

    const logout = () => {
        localStorage.removeItem("token");
        setUser({} as IUser);
    };

    return <AuthContext.Provider value={{ handleLogin, user, logout }}>{children}</AuthContext.Provider>;
}

export { AuthContext, AuthProvider };
