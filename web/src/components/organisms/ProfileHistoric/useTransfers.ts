import { AuthContext } from "../../../context/AuthContext";
import { useState, useEffect, useContext } from "react";
import { api } from "../../../api/api";

interface IData {
    transfersUser: {
        amount: string;
        idTransfer: string;
        createdAt: string;
    }[];
}

export function useTransfers() {
    const [data, setData] = useState({} as IData);
    const { user } = useContext(AuthContext);

    if (user.fullname) {
        const getData = async () => {
            const response = await api.get("/transfer");
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
