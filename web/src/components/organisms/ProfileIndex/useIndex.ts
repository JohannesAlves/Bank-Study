import { useState, useEffect } from "react";
import { api } from "../../../api/api";

interface IData {
    balance: string;
}

export function useData() {
    const [data, setData] = useState({} as IData);

    const getData = async () => {
        const response = await api.get("/balance");
        setData(response.data);
    };

    useEffect(() => {
        getData();
    }, []);

    return data;
}
