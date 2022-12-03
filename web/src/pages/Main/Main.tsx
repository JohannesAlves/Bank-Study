import { maskCPF } from "../../utils/maskCPF";
import { useContext, useState } from "react";
import { TitlesMain } from "../../components/molecules/TitlesMain";
import { Button } from "../../components/atoms/Button";
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
    const { register, handleSubmit } = useForm<FormValues>();
    const [value, setValue] = useState("");

    const onSubmit: SubmitHandler<FormValues> = async (data) => {
        try {
            const tryLogin = await handleLogin(data.cpf);
        } catch {
            alert("Algo de errado aconteceu!");
        }
    };

    function handleChangeMask(event: React.FormEvent<HTMLInputElement>) {
        const { value } = event.currentTarget;

        setValue(maskCPF(value));
    }

    return (
        <>
            <div className="mt-10 text-center text-gray-200 drop-shadow-lg">
                <div className="flex flex-col w-full h-full	items-center">
                    <TitlesMain />

                    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
                        <div>
                            <input
                                {...register("cpf")}
                                onChange={handleChangeMask}
                                value={value}
                                className="w-96 h-11 px-4 py-2 border-b-2 mt-14 bg-transparent border-gray-600 outline-none  focus:border-orange-500 text-gray-200 text-3xl text-center"
                            />
                        </div>

                        <div className="space-x-5">
                            <Button btnText="VAMOS LÁ!" />
                            <Link to="/signup">
                                <Button btnText="REGISTRAR" />
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Main;
