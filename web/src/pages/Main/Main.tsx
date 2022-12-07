import { maskCPF } from "../../utils/maskCPF";
import { useContext, useState } from "react";
import { TitlesMain } from "../../components/molecules/TitlesMain";
import { AuthContext } from "../../context/AuthContext";
import { SubmitHandler, useForm } from "react-hook-form";
import ButtonNav from "../../components/atoms/ButtonNav";
import { Link } from "react-router-dom";

interface FormValues {
    cpf: string;
}

interface ConfigProps {
    headers: {
        authorization: string;
    };
}

function Main() {
    const { handleLogin } = useContext(AuthContext);
    const { register, handleSubmit, setValue } = useForm<FormValues>();
    const [cpf, setCPF] = useState("");

    const onSubmit: SubmitHandler<FormValues> = async (data) => {
        try {
            const tryLogin = await handleLogin(data.cpf);
        } catch {
            alert("Algo de errado aconteceu!");
        }
    };

    return (
        <>
            <div className="mt-10 text-center text-gray-200 drop-shadow-lg">
                <div className="flex flex-col w-full h-full	items-center0">
                    <TitlesMain />

                    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
                        <div>
                            <input
                                autoComplete="off"
                                {...(register("cpf"),
                                {
                                    maxLength: 14,
                                    minLength: 14,
                                    required: true,
                                    onChange: (event) => {
                                        const { value } = event.currentTarget;
                                        setValue("cpf", maskCPF(value));
                                        setCPF(maskCPF(value));
                                    },
                                    value: cpf,
                                })}
                                className="input-variant-one mt-10  text-lg w-44 2xl:w-full 2xl:text-3xl"
                            />
                        </div>

                        <div className="space-x-1 sm:space-x-5 flex justify-center max-[340px]:text-sm">
                            <button type="submit" className="btn-variant-one mt-10 max-[340px]:w-20">
                                VAMOS LÁ!
                            </button>
                            <Link to="/signup">
                                <button className="btn-variant-one mt-10 max-[340px]:w-22">REGISTRAR</button>
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Main;
