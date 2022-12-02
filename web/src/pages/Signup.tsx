import { useState } from "react";
import { Button } from "../components/atoms/Button";
import Input from "../components/atoms/Input";
import { maskCPF } from "../utils/maskCPF";

export function Signup() {
    const [value, setValue] = useState("");

    function handleChangeMask(event: React.FormEvent<HTMLInputElement>) {
        const { value } = event.currentTarget;

        setValue(maskCPF(value));
    }

    return (
        <>
            <div className="flex flex-col text-center text-slate-300  w-full h-full">
                <h2 className="text-2xl font-mono mt-10">Hmmm, parece que você ainda não é registrado.</h2>

                <div className="flex flex-row  justify-center space-x-20 mt-10">
                    <div>
                        <h2>Qual é o seu nome completo?</h2>
                        <Input placeholder="Nome completo..." />
                    </div>

                    <div>
                        <h2>Me informa um CPF válido</h2>
                        <Input placeholder="123.456.178-12" handleOnChange={handleChangeMask} value={value} />
                    </div>
                </div>

                <div className="mt-20">
                    <Button btnText="Cadastrar" />
                </div>
            </div>
        </>
    );
}
