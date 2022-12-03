import { useState } from "react";
import { Button } from "../components/atoms/Button";
import { maskCPF } from "../utils/maskCPF";
import Input from "../components/atoms/Input";
import { useForm } from "react-hook-form";

export function Signup() {
    const [value, setValue] = useState("");
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => console.log(data);

    function handleChangeMask(event: React.FormEvent<HTMLInputElement>) {
        const { value } = event.currentTarget;

        setValue(maskCPF(value));
    }

    return (
        <>
            <div className="flex flex-col text-center text-slate-300  w-full h-full">
                <h2 className="text-2xl font-mono mt-10">Hmmm, parece que você ainda não é registrado.</h2>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex flex-row  justify-center space-x-20 mt-10">
                        <div>
                            <h2>Qual é o seu nome completo?</h2>
                            <input
                                placeholder="Nome completo..."
                                className="w-96 h-11 px-4 py-2 border-b-2 mt-14 bg-transparent border-gray-600 outline-none  focus:border-orange-500 text-gray-200 text-3xl text-center"
                            />
                        </div>

                        <div>
                            <h2>Me informa um CPF válido</h2>
                            <input
                                placeholder="123.456.178-12"
                                className="w-96 h-11 px-4 py-2 border-b-2 mt-14 bg-transparent border-gray-600 outline-none  focus:border-orange-500 text-gray-200 text-3xl text-center"
                            />
                        </div>
                    </div>

                    <div className="mt-20">
                        <Button btnText="Cadastrar" />
                    </div>
                </form>
            </div>
        </>
    );
}
