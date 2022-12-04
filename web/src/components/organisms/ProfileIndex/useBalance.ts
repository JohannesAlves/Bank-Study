import { useState, useEffect, useContext } from "react";
import { api } from "../../../api/api";
import { AuthContext } from "../../../context/AuthContext";

interface IData {
    balance: string;
}

export function useBalance() {
    const [data, setData] = useState({} as IData);
    const { user } = useContext(AuthContext);

    if (user.token) {
        const getData = async () => {
            const response = await api.get("/balance");
            setData(response.data);
        };

        useEffect(() => {
            getData();
        }, []);
    } else {
        return {} as IData;
    }

    return data;
}
