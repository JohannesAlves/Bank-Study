import { AuthContext } from "../../../context/AuthContext";
import { useState, useEffect, useContext } from "react";
import { api } from "../../../api/api";

export function useData() {
    const [data, setData] = useState({});
    const { user } = useContext(AuthContext);

    if (user.fullname) {
        const getData = async () => {
            const response = await api.get("/transfer");
            setData(response.data);
        };

        useEffect(() => {
            getData();
        }, []);
    }
}
