import { useEffect, useState } from "react";
import { maskCPF } from "../../utils/maskCPF";
import { SubmitHandler, useForm } from "react-hook-form";
import { api } from "../../api/api";
import { useNavigate } from "react-router-dom";
import Loading from "../../components/atoms/Loading/Loading";

interface FormValues {
    cpf: string;
    fullname: string;
}

export function Signup() {
    const [isLoading, setIsLoading] = useState(false);
    const [cpf, setCpf] = useState("");
    const { register, handleSubmit, setValue } = useForm<FormValues>();
    const navigate = useNavigate();

    function handleChangeMask(event: React.FormEvent<HTMLInputElement>) {
        const { value } = event.currentTarget;

        setCpf(maskCPF(value));
        setValue("cpf", value);
    }

    const onSubmit: SubmitHandler<FormValues> = async (data) => {
        try {
            setIsLoading(true);
            const response = await api.post("/signup", data);
            if (response) {
                setIsLoading(false);
                alert("Registrado com sucesso");
                navigate("/");
            }
        } catch (error) {
            setIsLoading(false);
            alert("Algo de errado aconteceu!");
        }
    };

    function Signup() {
        if (isLoading) {
            return <Loading />;
        } else {
            return (
                <>
                    <div className="flex flex-row justify-center text-center text-slate-300  2xl:w-full 2xl:h-full flex-wrap ">
                        <div>
                            <h2 className="text-xl 2xl:text-2xl font-mono mt-10 ">
                                Hmmm, parece que você ainda não é registrado.
                            </h2>
                        </div>

                        <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
                            <div className="flex sm:space-x-5 2xl:space-x-10 flex-wrap justify-center ">
                                <div>
                                    <h2>Qual é o seu nome completo?</h2>
                                    <input
                                        {...register("fullname")}
                                        placeholder="Nome completo..."
                                        className="input-variant-one max-[615px]:w-44 max-[615px]:text-sm"
                                    />
                                </div>

                                <div>
                                    <div>
                                        <h2>Me informa um CPF válido</h2>
                                    </div>

                                    <input
                                        autoComplete="off"
                                        autoFocus
                                        {...(register("cpf"),
                                        {
                                            onChange: handleChangeMask,
                                            minLength: 14,
                                            maxLength: 14,
                                            value: cpf,
                                        })}
                                        placeholder="123.456.178-12"
                                        className="input-variant-one max-[615px]:w-44 max-[615px]:text-sm"
                                    />
                                </div>
                            </div>

                            <div>
                                <button className="btn-variant-one  mt-5 sm:mt-10">CADASTRAR</button>
                            </div>
                        </form>
                    </div>
                </>
            );
        }
    }

    return <Signup />;
}
