import { useState, useEffect } from "react";
import { api } from "../../api/api";

interface IData {
    cpf: string;
    fullname: string;
}

export function useSignup(data: IData) {
    useEffect(() => {
        async function fetchSignup() {
            const response = await api.post("/signup", data);
        }
    }, []);
}
