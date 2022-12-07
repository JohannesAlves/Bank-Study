import React from "react";
import { maskCPF } from "./maskCPF";

type Props = {
    event: React.FormEvent<HTMLInputElement>;
    setCpf: (arg: string) => void;
    setValue: (cpf: string, value: string) => void;
};

export function handleChangeMaskCPF({ event, setCpf, setValue }: Props) {
    const { value } = event.currentTarget;

    setCpf(maskCPF(value));
    setValue("cpf", value);
}
