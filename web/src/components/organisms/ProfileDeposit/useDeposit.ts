import { AuthContext } from "../../../context/AuthContext";
import { useState, useEffect, useContext } from "react";
import { api } from "../../../api/api";

interface IDataPost {
    amount: number;
}

export function useDeposit(dataPost: IDataPost) {
    const [data, setData] = useState();
    const { user } = useContext(AuthContext);

    if (user.fullname) {
        const postData = async () => {
            const response = await api.post("/deposit", dataPost);
            setData(response.data);
        };

        useEffect(() => {
            postData();
        }, []);
    } else {
        return {} as IDataPost;
    }

    return data;
}
