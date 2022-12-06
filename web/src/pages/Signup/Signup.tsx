import { useEffect, useState } from "react";
import { maskCPF } from "../../utils/maskCPF";
import { SubmitHandler, useForm } from "react-hook-form";
import { api } from "../../api/api";
import { useNavigate } from "react-router-dom";

interface FormValues {
    cpf: string;
    fullname: string;
}

export function Signup() {
    const [value, setValue] = useState("");
    const { register, handleSubmit } = useForm<FormValues>();
    const navigate = useNavigate();

    const onSubmit: SubmitHandler<FormValues> = async (data) => {
        try {
            const response = await api.post("/signup", data);
            if (response) {
                alert("Registrado com sucesso");
                navigate("/");
            }
        } catch (error) {
            alert("Algo de errado aconteceu!");
        }
    };

    function handleChangeMask(event: React.FormEvent<HTMLInputElement>) {
        const { value } = event.currentTarget;

        setValue(maskCPF(value));
    }

    return (
        <>
            <div className="flex flex-row justify-center text-center text-slate-300  2xl:w-full 2xl:h-full flex-wrap ">
                <div>
                    <h2 className="text-xl 2xl:text-2xl font-mono mt-10 ">
                        Hmmm, parece que você ainda não é registrado.
                    </h2>
                </div>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex sm:space-x-5 2xl:space-x-10 flex-wrap justify-center">
                        <div>
                            <h2>Qual é o seu nome completo?</h2>
                            <input
                                {...register("fullname")}
                                placeholder="Nome completo..."
                                className=" h-7  border-b-2 mt-14 bg-transparent border-gray-600 outline-none  focus:border-orange-500 text-gray-200 lg:text-3xl text-lg text-center"
                            />
                        </div>

                        <div className="">
                            <h2 className="">Me informa um CPF válido</h2>
                            <input
                                autoComplete="off"
                                {...register("cpf")}
                                onChange={handleChangeMask}
                                value={value}
                                placeholder="123.456.178-12"
                                className=" h-7  border-b-2 mt-14 bg-transparent border-gray-600 outline-none  focus:border-orange-500 text-gray-200 lg:text-3xl text-lg text-center"
                            />
                        </div>
                    </div>

                    <div className="">
                        <button className="btn-variant-one  mt-5 sm:mt-10">CADASTRAR</button>
                    </div>
                </form>
            </div>
        </>
    );
}
